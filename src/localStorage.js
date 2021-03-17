function getAlarms() {
    let allAlarms = [
        {
        "hours": "10",
        "minutes": "45",
        "period": "am",
        "active": false,
        },
    ];

    if (localStorage.getItem('allAlarms') === null) {
        allAlarms = [{
            "hours": "10",
            "minutes": "45",
            "period": "am",
            "active": false,
        }];
    } else {
        allAlarms = JSON.parse(localStorage.getItem('allAlarms'));
        console.log("parse runs");
    }

    return allAlarms;

}

export { getAlarms }