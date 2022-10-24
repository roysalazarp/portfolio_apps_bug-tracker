import { config } from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

config({ path: `${__dirname}/../../env/backend/${process.env.NODE_ENV}.env` });

const app = express();
const port = process.env.PORT;

app.use(
  cors({
    origin: process.env.CLIENT,
    credentials: false,
  })
);

app.use(cookieParser());

app.get("/", (_, res) => {
  res.json({
    testData: "Hello ...",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
