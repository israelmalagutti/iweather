import { render } from "@testing-library/react-native";

import { Input } from "./";

describe("Component: Input", () => {
  it("should render without activity indicator", () => {
    render(<Input />);
  });
});