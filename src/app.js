const express = require("express");
const cors = require("cors");

const {
    fetchDepots,
    fetchVehicles
} = require("./services/vehicleService");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Backend server is running successfully"
    });
});

app.get("/depots", async (req, res) => {
    const depots = await fetchDepots();

    res.json(depots);
});

app.get("/vehicles", async (req, res) => {
    const vehicles = await fetchVehicles();

    res.json(vehicles);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});