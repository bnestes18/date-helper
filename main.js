let stamp = (function() {

    let times = {
        hours: 1000 * 60 * 60,
        days: 1000 * 60 * 60 * 24,
        weeks: 1000 * 60 * 60 * 24 * 7,
        months: 1000 * 60 * 60 * 24 * 30,
        years: 1000 * 60 * 60 * 24 * 365
    }

    let format = {
        dateStyle: 'long', 
        timeStyle: 'short', 
        hour12: true
    }

    /**
    * Add n number of hours to the given timestamp
    * @return {Number} A unix timestamp for hours
    */
    function addHours(timestamp, num) {
        let hours = times['hours'];
        return timestamp + (hours * num);
    }

    /**
    * Add n number of days to the given timestamp
    * @return {Number} A unix timestamp for days
    */
    function addDays(timestamp, num) {
        let days = times['days'];
        return timestamp + (days * num);
    }

    /**
    * Add n number of weeks to the given timestamp
    * @return {Number} A unix timestamp for weeks
    */
    function addWeeks(timestamp, num) {
        let weeks = times['weeks'];
        return timestamp + (weeks * num);
    }

    /**
    * Add n number of months to the given timestamp
    * @return {Number} A unix timestamp for months
    */
    function addMonths(timestamp, num) {
        let months = times['months'];
        return timestamp + (months * num);
    }

    /**
    * Add n number of years to the given timestamp
    * @return {Number} A unix timestamp for years
    */
    function addYears(timestamp, num) {
        let years = times['years'];
        return timestamp + (years * num);
    }

    /**
    * Get a date in the future (or past) from a timestamp
    * @return {String} A formatted date string
    */
    function getDate(timestamp) {
        let date = new Date(timestamp);
        return date.toLocaleString(navigator.language, format);
    }

    // Export functions
    return {addHours, addDays, addWeeks, addMonths, addYears, getDate}

})();

let now = new Date().getTime();
console.log('now', now);
let addTwoYears = stamp.addYears(now, 2);
console.log(addTwoYears);
console.log(stamp.getDate(addTwoYears));
