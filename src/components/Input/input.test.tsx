import { render } from "@testing-library/react-native";

import { Input } from "./";

describe("Component: Input", () => {
  it("should render without ActivityIndicator", () => {
    const { debug } = render(<Input />);

    debug();
  });
});
