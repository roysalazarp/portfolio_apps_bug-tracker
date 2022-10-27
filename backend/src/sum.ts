export default function sum(...numbers: number[]): number {
  return numbers.reduce((a, c) => a + c, 0);
}

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;
  describe("sum", () => {
    it("return sum of all numbers", () => {
      expect(sum(1, 2, 3)).toBe(6);
    });
  });
}
