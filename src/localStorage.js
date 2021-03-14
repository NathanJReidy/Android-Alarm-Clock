
function getAlarms() {
    let allAlarms = [
        {
        "hours": "10",
        "minutes": "45",
        "period": "am",
        "active": false,
        },
    ];

    //localStorage.setItem('allAlarms', JSON.stringify(allAlarms));

    if (localStorage.getItem('allAlarms') === null) {
        allAlarms = [];
    } else {
        allAlarms = JSON.parse(localStorage.getItem('allAlarms'));
        console.log("parse runs");
    }

    return allAlarms;

}

function addAlarm(alarm) {
    const allAlarms = getAlarms();
    localStorage.setItem('allAlarms', JSON.stringify(allAlarms));
}

function removeAlarm(index) {
    const allAlarms = getAlarms();

    // allAlarms.forEach((alarm, index) = {
    //     if (alarm.index === index) {
    //         allAlarms.splice(index, 1);
    //     };

    // });

    localStorage.setItem('allAlarms', JSON.stringify(allAlarms));

}

export { getAlarms, addAlarm, removeAlarm }