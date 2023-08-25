const fs = require("fs");

const getStats = async (req, res, next) => {
  try {
    const data = fs.readFileSync(filePath);
    const stats = JSON.parse(data);
    const playerStats = stats.find((player) => {
      if (player.id === Number(req.params.id)) {
        return player;
      }
    });
    if (!playerStats) {
      const err = new Error(`Player stats not found`);
      err.stats = 404;
      throw err;
    }
    res.json(playerStats);
  } catch (error) {
    next(error);
  }
};

module.exports = getStats;
