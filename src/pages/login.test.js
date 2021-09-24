import React from "react";

import Login from "../pages/login";
import { Provider } from "react-redux";

import { store } from "../redux/store";

import { shallow } from "enzyme";

describe("Login component tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it("has a username input field", () => {
    expect(wrapper.find("#username").length).toBe(1);
  });

  it("render h2", () => {
    expect(wrapper.find("#h2").length).toBe(1);
  });
});
