import { getNextDays } from "./getNextDays";

describe("Test getNextDays fn", () => {
  it("should return the next five days", () => {
    const days = getNextDays();

    expect(days.length).toBe(5);
  });
});
