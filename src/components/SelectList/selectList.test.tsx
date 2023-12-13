import { fireEvent, render, screen } from "@testing-library/react-native";

import { CityProps } from "@services/getCityByNameService";

import { SelectList } from "./";

describe("Component: SelectList", () => {
  it("should return the selected city details", () => {
    const data: CityProps[] = [
      { id: "1", name: "Campinas", latitude: 123, longitude: 321 },
      { id: "2", name: "Campo Grande", latitude: 456, longitude: 654 },
      { id: "3", name: "Ribeirão Preto", latitude: 789, longitude: 987 },
    ];

    const onChange = jest.fn();
    const onPress = jest.fn();

    render(<SelectList data={data} onChange={onChange} onPress={onPress} />);

    const selectedCity = screen.getByText(/campo/i);

    fireEvent.press(selectedCity);

    expect(onPress).toBeCalledTimes(0);
  });
});
