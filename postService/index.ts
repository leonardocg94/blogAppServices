import express, { Express } from "express";
import { exit } from "process";
import { router } from "./src/routers";

const app: Express = express();

app.use(express.json());

app.use("/post", router);

const starService = async () => {
  try {
    app.listen(4000, () => {
      console.log("post service has running on port: 4000");
    });
  } catch (error) {
    console.log(error);
    exit(1);
  }
};

starService();
