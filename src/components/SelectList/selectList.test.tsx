import { fireEvent, render, screen } from "@testing-library/react-native";

import { CityProps } from "@services/getCityByNameService";

import { SelectList } from "./";

describe("Component: SelectList", () => {
  it("should not show options when data is empty", () => {
    const data: CityProps[] = [];

    render(<SelectList data={data} onChange={() => {}} onPress={() => {}} />);

    const options = screen.getByTestId("options");

    expect(options.children).toHaveLength(0);
  });

  it("should return the selected city details", () => {
    const data: CityProps[] = [
      { id: "1", name: "Campinas", latitude: 123, longitude: 321 },
      { id: "2", name: "Campo Grande", latitude: 456, longitude: 654 },
      { id: "3", name: "Ribeirão Preto", latitude: 789, longitude: 987 },
    ];

    const onChange = jest.fn();
    const onPress = jest.fn();

    render(<SelectList data={data} onChange={onChange} onPress={onPress} />);

    const getCity = /campo/i;
    const selectedCity = screen.getByText(getCity);

    fireEvent.press(selectedCity);

    expect(onPress).toHaveBeenCalledWith(data[1]);
  });
});
