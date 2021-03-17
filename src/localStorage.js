function getAlarms() {
    let allAlarms = [
        {
        "hours": "10",
        "minutes": "45",
        "period": "am",
        "active": false,
        },
    ];

    localStorage.setItem('allAlarms', JSON.stringify(allAlarms));

    if (localStorage.getItem('allAlarms') === null) {
        allAlarms = [];
    } else {
        allAlarms = JSON.parse(localStorage.getItem('allAlarms'));
        console.log("parse runs");
    }

    return allAlarms;

}

export { getAlarms }