import React from "react";

import About from "../component/About";

import { shallow } from "enzyme";

describe("Login component tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<About />);
  });

  it("render h2", () => {
    expect(wrapper.find("#h3").length).toBe(1);
  });
});
