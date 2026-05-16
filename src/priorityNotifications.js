const notifications = [
    {
        ID: "1",
        Type: "Placement",
        Message: "Amazon Hiring",
        Timestamp: "2026-04-22 17:51:30"
    },
    {
        ID: "2",
        Type: "Event",
        Message: "Tech Fest",
        Timestamp: "2026-04-22 17:40:30"
    },
    {
        ID: "3",
        Type: "Result",
        Message: "Mid Sem Results",
        Timestamp: "2026-04-22 17:45:30"
    },
    {
        ID: "4",
        Type: "Placement",
        Message: "Microsoft Hiring",
        Timestamp: "2026-04-22 17:55:30"
    }
];

const priorityMap = {
    Placement: 3,
    Result: 2,
    Event: 1
};

notifications.sort((a, b) => {

    if (priorityMap[b.Type] !== priorityMap[a.Type]) {
        return priorityMap[b.Type] - priorityMap[a.Type];
    }

    return new Date(b.Timestamp) - new Date(a.Timestamp);
});

const topNotifications = notifications.slice(0, 10);

console.log("Top Priority Notifications:");

console.log(topNotifications);