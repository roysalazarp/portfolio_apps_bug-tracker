import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(cookieParser());

app.get("/", (_, res) => {
  res.json({
    testData: "Hello ...",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
