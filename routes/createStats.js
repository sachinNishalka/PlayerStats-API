const fs = require("fs");
// making the post request
const createStats = async (req, res, next) => {
  try {
    const data = fs.readFileSync(filePath);
    const stats = JSON.parse(data);
    const newStats = {
      id: req.body.id,
      wins: req.body.wins,
      losses: req.body.losses,
      points_scored: req.body.points_scored,
    };
    stats.push(newStats);
    fs.writeFileSync(filePath, JSON.stringify(stats));
    res.status(201).json(newStats);
  } catch (error) {
    next(error);
  }
};

module.exports = createStats;
