import express, { Request } from "express";
import path from "path";

export const register = (app: express.Application) => {
  // define a route handler for the default home page

  app.get("/retete-app", (req: Request, res: any) => {
    res.sendFile(
      path.join(__dirname, "../../retete-client/build", "index.html")
    );
  });

  app.get("/about-me", (req: Request, res: any) => {
    const userDePeNet = { name: "Cristea Cristian", dob: "26 09 1989" };
    res.render("about-me", { data: userDePeNet });
  });
};
