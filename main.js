/**
 * Get a date in the future (or past) from a timestamp
 * @return {String} A formatted date string
 */
function getFutureDate (num, units = "days", timeStamp = new Date().getTime()) {
    console.log('units passed in:', units);

    // if (!timestamp) { timestamp = new Date().getTime() }
    if (!num) { throw new Error("Please provide an n number of units") };

    let unitConverter = 0;
    switch (units) {
        case 'hours': 
        // 1 hour
        unitConverter = 1000 * 60 * 60;
        break;
        case 'days':
        // 1 day
        unitConverter = 1000 * 60 * 60 * 24;
        break;
        case 'weeks':
        // 1 week
        unitConverter = 1000 * 60 * 60 * 24 * 7;
        break;
        case 'months':
        // 1 month = 1000ms * 60s * 60m * 30d (approximately)
        unitConverter = 1000 * 60 * 60 * 24 * 30;
        break;
        case 'years':
        // 1 year = 1000ms * 60s * 60m * 24h * 365d
        unitConverter = 1000 * 60 * 60 * 24 * 365;
        break;
    }
        
    // Returns timestamp
    console.log('specified timestamp ->', timeStamp);

    let date = new Date(timeStamp);
    console.log('date ->', date);

    let newTimeStamp = timeStamp + (unitConverter * num);
    let newDate = new Date(newTimeStamp);
    console.log(num + ' ' + units + ' ' +'from specified date ->', newDate);

    console.log('formatted date string ->', newDate.toLocaleString(navigator.language, {dateStyle: 'long', timeStyle: 'short', hour12: true}));
}

getFutureDate(3, 'weeks');