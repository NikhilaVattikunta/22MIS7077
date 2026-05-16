const fetchDepots = async () => {
    return {
        depots: [
            {
                ID: 1,
                MechanicHours: 60
            },
            {
                ID: 2,
                MechanicHours: 135
            }
        ]
    };
};

const fetchVehicles = async () => {
    return {
        vehicles: [
            {
                TaskID: "123",
                Duration: 5,
                Impact: 9
            },
            {
                TaskID: "456",
                Duration: 2,
                Impact: 4
            }
        ]
    };
};

module.exports = {
    fetchDepots,
    fetchVehicles
};