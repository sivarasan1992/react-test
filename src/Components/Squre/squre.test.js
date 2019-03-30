import React from "react";
import { shallow } from "enzyme";
import Squre from "./squre";

it("render without crash", () => {
  shallow(<Squre />);
});
