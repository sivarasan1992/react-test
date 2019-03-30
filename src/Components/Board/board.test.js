import React from "react";
import Board from "./board";
import { shallow, mount } from "enzyme";

it("render without issues", () => {
  const squares = Array(9).fill(null);
  shallow(<Board squares={squares} />);
});
it("calls click event on click of a board square", () => {
  const squares = Array(9).fill(null);
  const onClick = jest.fn();
  const wrapper = mount(<Board squares={squares} onClick={onClick} />);
  wrapper
    .find("button.square")
    .first()
    .simulate("click");
  console.log(expect(onClick).toBeCalledWith, "expect(onClick)");
  expect(onClick).toBeCalledWith(0);
});
