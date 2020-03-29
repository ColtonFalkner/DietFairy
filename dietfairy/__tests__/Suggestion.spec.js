import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Suggestion from "../src/components/Suggestion/Suggestion";

beforeEach(cleanup);

jest.mock("../src/hooks/index.js", () => ({
  useFoodInfo: jest.fn(() => ({
    toggleFoodInfoOff: jest.fn()
  })),
  useSearchQuery: jest.fn(() => ({
    setSearchQuery: jest.fn()
  }))
}));

describe("<Suggestion />", () => {
  it("should render a clickable span", () => {
    const { queryByTestId } = render(<Suggestion type="first" />);

    expect(queryByTestId("suggestion")).toBeTruthy();
    fireEvent.click(queryByTestId("suggestion"));
  });
});
