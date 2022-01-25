import React from "react";

import {cleanup, render} from "@testing-library/react";

import Application from "components/Application";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Application/>);
});
