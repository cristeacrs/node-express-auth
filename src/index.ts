import express, { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
const app = express();

// initialize configuration
dotenv.config();

// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// define a route handler for the default home page
app.get("/", (req: Request, res: Response) => {
  // render the index template
  res.render("index");
});
// start the Express server
app.listen(process.env.SERVER_PORT, () => {
  console.log(`server started at http://localhost:${process.env.SERVER_PORT}`);
});
