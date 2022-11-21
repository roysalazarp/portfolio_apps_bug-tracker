import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import swaggerDocs from "./utils/swagger";
import validateResource from "./middleware/validateResource";
import { testSchema } from "./schemas/test.schema";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({
  origin: process.env.CLIENT
}));

app.use(cookieParser());

/**
 * @openapi
 * /:
 *   get:
 *     tags:
 *       - test
 *     responses:
 *       '200':
 *         description: success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Test'
 */
app.get("/", validateResource(testSchema), (req, res) => {
  res.json({
    testData: req.query.testInput + " world",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  swaggerDocs(app)
});