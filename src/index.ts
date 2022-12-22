import express, { Application, Request, Response } from "express";
const app: Application = express();
app.use(express.json());
const PORT: number | string = process.env.PORT || 1234;
require("../config/db");
import cors from "cors";
import router from "../Router/router";
app.get("/", (Request, Response) => {
  return Response.status(200).json({
    message: "here we are",
  });
});
app.use("/", router);
app.use(cors());
app.listen(PORT, () => {
  console.log("serv is on....");
});
