import { object, string } from "zod";

/**
 * @openapi
 * components:
 *   schemas:
 *     Test:
 *       type: object
 *       properties:
 *         testData:
 *           type: string
 */
export const testSchema = object({
  query: object({
    testInput: string({
      required_error: "field is required",
    }),
  }),
});
