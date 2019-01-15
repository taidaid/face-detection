import React, { Component } from "react";
import SignIn from "./components/SignIn/SignIn";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import Register from "./components/Register/Register";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import "tachyons";
import "./App.css";

const app = new Clarifai.App({
  apiKey: "d3a7e49e40bd4319a07e8fe9877e0b17"
});

const particlesOptions = {
  particles: {
    number: {
      value: 189,
      density: {
        enable: true,
        value_area: 1262.6362266116362
      }
    },
    color: {
      value: "#000000"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.8522794529628545,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#c8c0c0",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      color: "",
      faceBoxes: [],
      route: "signIn",
      isSignedIn: false,
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: ""
      }
    };
  }

  loadUser = user => {
    this.setState({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        entries: user.entries,
        joined: user.joined
      }
    });
  };

  calculateFaceLocation = boundingBoxes => {
    // console.log(boundingBox);
    const faceBoxes = boundingBoxes.map(box => {
      const image = document.getElementById("image");
      const width = Number(image.width);
      const height = Number(image.height);
      // console.log(width, height);
      return {
        leftCol: box.left_col * width,
        topRow: box.top_row * height,
        rightCol: width - box.right_col * width,
        bottomRow: height - box.bottom_row * height
      };
    });
    return faceBoxes;
  };

  displayFaceBox = faceBoxes => {
    this.setState({ faceBoxes });
    // console.log(box);
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
    // console.log(event.target.value);
  };

  onButtonSubmit = event => {
    // console.log(event.type);
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        const boundingBoxes = response.outputs[0].data.regions.map(
          region => region.region_info.bounding_box
        );
        console.log(boundingBoxes);
        this.displayFaceBox(this.calculateFaceLocation(boundingBoxes));
      })
      .catch(err => console.log(err));
  };

  onRouteChange = route => {
    if (route === "signIn" || route === "register") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route });
  };

  render() {
    const { isSignedIn, imageUrl, route, faceBoxes } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <div className="justify-between  Navbar pa4">
          <div className="">
            <Logo />
          </div>
          <div className="">
            <Navigation
              isSignedIn={isSignedIn}
              onRouteChange={this.onRouteChange}
            />
          </div>
        </div>

        {route === "home" ? (
          <div>
            <Rank />
            <ImageLinkForm
              name={this.state.user.name}
              entires={this.state.user.entries}
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition faceBoxes={faceBoxes} imageUrl={imageUrl} />
          </div>
        ) : route === "signIn" ? (
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}

export default App;
