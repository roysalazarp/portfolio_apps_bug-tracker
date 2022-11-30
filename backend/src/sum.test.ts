import sum from "./sum";
import { expect, describe, it } from 'vitest'

describe("sum", () => {
  it("return sum of all numbers", () => {
    expect(sum(1, 2, 3)).toBe(6);
  });
});
