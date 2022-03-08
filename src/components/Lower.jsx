import React from "react";
import List from "./List";
import "./lower.css";

const Lower = () => {
  return (
    <div className="mb-4">
        <p className="lower__description">
          I've recently ended my Web Development studies, and I'm looking
          forward to learning new technologies and abilities. I know I've got a
          lot ahead of me yet! But, until then, I can enumerate these skills:
        </p>
      <List />
    </div>
  );
};

export default Lower;
