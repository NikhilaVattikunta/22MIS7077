const express = require("express");

const router = express.Router();

const notifications = [
    {
        id: 1,
        type: "Placement",
        message: "Amazon Hiring",
        timestamp: "2026-04-22 17:51:30"
    },
    {
        id: 2,
        type: "Event",
        message: "Hackathon Event",
        timestamp: "2026-04-22 17:40:30"
    },
    {
        id: 3,
        type: "Result",
        message: "Mid Results Released",
        timestamp: "2026-04-22 17:45:30"
    }
];

const priorityMap = {
    Placement: 3,
    Result: 2,
    Event: 1
};

router.get("/", (req, res) => {

    const sortedNotifications = notifications.sort((a, b) => {

        if (priorityMap[b.type] !== priorityMap[a.type]) {
            return priorityMap[b.type] - priorityMap[a.type];
        }

        return new Date(b.timestamp) - new Date(a.timestamp);
    });

    res.json(sortedNotifications);
});

module.exports = router;