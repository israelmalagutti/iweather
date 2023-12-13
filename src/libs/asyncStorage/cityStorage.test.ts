import {
  getStorageCity,
  removeStorageCity,
  saveStorageCity,
} from "./cityStorage";

describe("Storage: CityStorage", () => {
  it("should return null when no city is stored", async () => {
    const response = await getStorageCity();

    expect(response).toBeNull();
  });
});
