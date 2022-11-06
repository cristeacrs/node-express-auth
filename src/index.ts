import express, { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import * as routes from "./routes";

const app = express();

// initialize configuration
dotenv.config();

// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req: Request, res: any) => {
  res.render("index");
});

// Serve static for react client
app.use(express.static(path.join(__dirname, "../retete-client/build")));

routes.register(app);

// start the Express server
app.listen(process.env.SERVER_PORT, () => {
  console.log(`server started at http://localhost:${process.env.SERVER_PORT}`);
});
