import express from "express";
import { createCourse } from "./routes";

const app = express();

app.get("/account", createCourse);

app.listen(3333, () => console.log("server is running!"));

