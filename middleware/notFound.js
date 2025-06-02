const notFound = (req, res) => res.status(404).send("Route not found. Please enter a valid route");

module.exports = notFound;