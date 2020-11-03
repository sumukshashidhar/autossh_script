export {};
const logger = require("./../config/logger")
module.exports = (app) => {
    app.get("/", async function (req, res) {
        logger.debug("Hit the homepage");
        res.status(200).json({
            "message":"All OK"
        })
    });
};