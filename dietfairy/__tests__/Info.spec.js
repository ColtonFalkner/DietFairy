import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Info from "../src/components/Info/Info";

beforeEach(cleanup);

jest.mock("../src/hooks/index.js", () => ({
  useFoodInfo: jest.fn(() => ({
    toggleFoodInfoOff: jest.fn(),
    food: {
      strFood: "Negroni"
    }
  })),
  useSearchQuery: jest.fn(() => ({
    setSearchQuery: jest.fn()
  }))
}));

describe("<Info />", () => {
  it("renders", () => {
    const { queryByTestId } = render(<Info />);

    expect(queryByTestId("info")).toBeTruthy();
    fireEvent.click(queryByTestId("close"));
  });
});
