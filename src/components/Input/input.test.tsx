import { render, screen } from "@testing-library/react-native";

import { Input } from "./";

describe("Component: Input", () => {
  it("should render without ActivityIndicator", () => {
    render(<Input />);

    const activityIndicator = screen.queryByTestId("activityIndicator");
    expect(activityIndicator).toBeNull();
  });

  it("should render with ActivityIndicator", () => {
    render(<Input isLoading />);

    const activityIndicator = screen.getByTestId("activityIndicator");
    expect(activityIndicator).toBeTruthy();
  });
});
