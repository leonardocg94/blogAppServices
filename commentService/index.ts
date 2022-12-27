import express, { Express } from "express";
import cors from "cors";
import { exit } from "process";
import { router } from "./src/routers";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use("/post", router);

const starService = async () => {
  try {
    app.listen(4001, () => {
      console.log("comment service has running on port: 4001");
    });
  } catch (error) {
    console.log(error);
    exit(1);
  }
};

starService();
