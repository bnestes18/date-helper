let stamp = (function() {

    let times = {
        hours: 1000 * 60 * 60,
        days: 1000 * 60 * 60 * 24,
        weeks: 1000 * 60 * 60 * 24 * 7,
        months: 1000 * 60 * 60 * 24 * 30,
        years: 1000 * 60 * 60 * 24 * 365
    }

    /**
    * Add n number of hours to the given timestamp
    * @return {Number} A unix timestamp for hours
    */
    function addHours(timestamp, num = 1) {
        return timestamp + (times.hours * num);
    }

    /**
    * Add n number of days to the given timestamp
    * @return {Number} A unix timestamp for days
    */
    function addDays(timestamp, num = 1) {
        return timestamp + (times.days * num);
    }

    /**
    * Add n number of weeks to the given timestamp
    * @return {Number} A unix timestamp for weeks
    */
    function addWeeks(timestamp, num = 1) {
        return timestamp + (times.weeks * num);
    }

    /**
    * Add n number of months to the given timestamp
    * @return {Number} A unix timestamp for months
    */
    function addMonths(timestamp, num = 1) {
        let months = times['months'];
        return timestamp + (times.months * num);
    }

    /**
    * Add n number of years to the given timestamp
    * @return {Number} A unix timestamp for years
    */
    function addYears(timestamp, num = 1) {
        return timestamp + (times.years * num);
    }

    /**
    * Get a date in the future (or past) from a timestamp
    * @return {String} A formatted date string
    */
    function getDate(timestamp, options = {}) {
        let format = Object.assign({
            dateStyle: 'long', 
            timeStyle: 'short', 
            hour12: true
        }, options)

        return new Date(timestamp).toLocaleString(navigator.language, format);
    }

    // Export functions
    return {addHours, addDays, addWeeks, addMonths, addYears, getDate}

})();

let now = new Date().getTime();
let twoWeeksFromNow = stamp.addWeeks(now, 2);
console.log(stamp.getDate(twoWeeksFromNow, {dateStyle: 'short'}));