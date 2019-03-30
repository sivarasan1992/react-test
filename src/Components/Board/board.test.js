import React from "react";
import Board from "./board";
import { shallow } from "enzyme";

it("render without issues", () => {
  const squares = Array(9).fill(null);
  shallow(<Board squares={squares} />);
});
