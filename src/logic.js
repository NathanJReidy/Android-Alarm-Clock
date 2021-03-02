let allAlarms = [];

function createAlarm(time, period) {
    allAlarms.push({
        time,
        period,
        active: true,
    })
}

export { allAlarms } 