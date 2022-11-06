import express, { Request } from "express";

export const register = (app: express.Application) => {
  // define a route handler for the default home page
  app.get("/", (req: Request, res: any) => {
    res.render("index");
  });

  app.get("/about-me", (req: Request, res: any) => {
    const userDePeNet = { name: "Cristea Cristian", dob: "26 09 1989" };
    console.log("request", req.query);
    res.render("about-me", { data: userDePeNet });
  });
};