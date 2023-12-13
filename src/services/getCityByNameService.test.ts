import { api } from "./api";

import { getCityByNameService } from "./getCityByNameService";

import { mockCityAPIResponse } from "@mocks/index";

describe("Service: getCityByNameService", () => {
  it("should return the city details", async () => {
    jest.spyOn(api, "get").mockResolvedValue({
      data: mockCityAPIResponse,
    });

    const response = await getCityByNameService("São Paulo");

    expect(response.length).toBeGreaterThan(0);
  });
});
