/**
 * Get a date in the future (or past) from a timestamp
 * @return {String} A formatted date string
 */
function getFutureDate (options = {}) {

    let { num, units, timestamp, format } = Object.assign({
        num: 1,
        units: 'days',
        timestamp: new Date().getTime(),
        format: {
            dateStyle: 'long', 
            timeStyle: 'short', 
            hour12: true
        }
    }, options);

    let times = {
        hours: 1000 * 60 * 60,
        days: 1000 * 60 * 60 * 24,
        weeks: 1000 * 60 * 60 * 24 * 7,
        months: 1000 * 60 * 60 * 24 * 30,
        years: 1000 * 60 * 60 * 24 * 365
    }
    

    if (!times[units]) { throw new Error(`${times[units]} is not a valid unit of time.`) };


    console.log('specified timestamp ->', timestamp);

    let date = new Date(timestamp);
    console.log('provided timestamp conversion ->', date);

    let newTimestamp = timestamp + (times[units] * num);
    let newDate = new Date(newTimestamp);
    console.log(num + ' ' + units + ' ' +'from specified date ->', newDate);

    console.log('formatted date string ->', newDate.toLocaleString(navigator.language, format));
}

getFutureDate({num: 2, units: 'years'});