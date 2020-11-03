module.exports = (app) => {
    require("./routes/core")(app); // core routes, such as alive or not.
    require("./routes/auth")(app); // authentication routes
};