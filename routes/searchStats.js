const fs = require("fs");
// search by wins
const searchStats = async (req, res, next) => {
  try {
    const data = fs.readFileSync(filePath);
    const stat = JSON.parse(data);

    const statByWins = stat
      .map((player) => {
        if (player.wins === Number(req.query.wins)) {
          return player;
        }
      })
      .filter((player) => {
        if (player !== null) {
          return player;
        }
      });

    if (!statByWins) {
      const error = new Error(`Player not found for wins`);
      error.status = 404;
      throw error;
    }
    res.status(200).json(statByWins);
  } catch (error) {
    next(error);
  }
};

module.exports = searchStats;
