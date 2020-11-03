module.exports = (app) => {
    app.get("/", async function (req, res) {
        console.debug("Hit the homepage");
        res.json({
            status: 200,
            message: "API service is online",
        });
    });
};