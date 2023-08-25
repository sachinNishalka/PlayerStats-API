const fs = require("fs");
// making the update request

const updateStats = async (req, res, next) => {
  try {
    const data = fs.readFileSync(filePath);
    const stats = JSON.parse(data);
    const playerStat = stats.find((player) => {
      if (player.id === Number(req.params.id)) {
        return player;
      }
    });
    if (!playerStat) {
      const err = new Error(`Player not found`);
      err.status = 404;
      throw err;
    }
    // the new data from the client side
    const newStatData = {
      id: req.body.id,
      wins: req.body.wins,
      losses: req.body.losses,
      points_scored: req.body.points_scored,
    };
    // this will return a new array with updated data
    const newStat = stats.map((player) => {
      if (player.id === Number(req.params.id)) {
        return newStatData;
      } else {
        return player;
      }
    });
    fs.writeFileSync(filePath, JSON.stringify(newStat));
    res.status(200).json(newStatData);
  } catch (error) {
    next(error);
  }
};

module.exports = updateStats;
