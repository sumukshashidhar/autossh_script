module.exports = (app) => {
    require("./routes/core")(app); // core routes, such as alive or not.
};