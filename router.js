const express = require("express");
const path = require("path");
const getStats = require("./routes/getStats");
const createStats = require("./routes/createStats");
const updateStats = require("./routes/updateStats");
const deleteStats = require("./routes/deleteStats");
const searchStats = require("./routes/searchStats");

// making the express router
const router = express.Router();
filePath = path.join(__dirname, "./stats.json");

router
  .route("/api/v1/stats/:id")
  .get(getStats)
  .put(updateStats)
  .delete(deleteStats);
router.route("/api/v1/stats").post(createStats).get(searchStats);

module.exports = router;
