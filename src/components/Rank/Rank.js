import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f3">{`${name}, in this session, you have submitted this many pictures...`}</div>
      <div className="white f1">{entries}</div>
    </div>
  );
};

export default Rank;
