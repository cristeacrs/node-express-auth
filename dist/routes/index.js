"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const register = (app) => {
    // define a route handler for the default home page
    app.get("/", (req, res) => {
        res.render("index");
    });
    app.get("/about-me", (req, res) => {
        const userDePeNet = { name: "Cristea Cristian", dob: "26 09 1989" };
        console.log("request", req.query);
        res.render("about-me", { data: userDePeNet });
    });
};
exports.register = register;
//# sourceMappingURL=index.js.map