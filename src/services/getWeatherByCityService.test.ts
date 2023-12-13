import { api } from "./api";

import { getWeatherByCityService } from "./getWeatherByCityService";

import { mockWeatherAPIResponse } from "@mocks/api";

describe("Service: getWeatherByCityService", () => {
  it("should return weather formatted details", async () => {
    jest.spyOn(api, "get").mockResolvedValue({
      data: mockWeatherAPIResponse,
    });

    const response = await getWeatherByCityService({
      latitude: 123,
      longitude: 321,
    });

    expect(response).toHaveProperty("today");
  });
});
