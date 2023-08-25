const fs = require("fs");

// making the delete request

const deleteStats = async (req, res, next) => {
  try {
    const data = fs.readFileSync(filePath);
    const stats = JSON.parse(data);
    const playerStats = stats.find((player) => {
      if (player.id === Number(req.params.id)) {
        return player;
      }
    });
    if (!playerStats) {
      const err = new Error(`Player not found`);
      err.status = 404;
      next(err);
    }
    const newStats = stats
      .map((player) => {
        if (player.id === Number(req.params.id)) {
          return null;
        } else {
          return player;
        }
      })
      .filter((player) => {
        if (player !== null) {
          return player;
        }
      });
    fs.writeFileSync(filePath, JSON.stringify(newStats));
    res.status(200).end();
  } catch (error) {}
};
module.exports = deleteStats;
