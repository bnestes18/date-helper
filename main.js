let Stamp = (function() {

    let times = {
        hours: 1000 * 60 * 60,
        days: 1000 * 60 * 60 * 24,
        weeks: 1000 * 60 * 60 * 24 * 7,
        months: 1000 * 60 * 60 * 24 * 30,
        years: 1000 * 60 * 60 * 24 * 365
    }

    function Constructor(date) {
        this.timestamp = date ? new Date(date).getTime() : new Date().getTime();
    }

    /**
    * Add n number of hours to the given timestamp
    * @return {Number} A unix timestamp for hours
    */
    Constructor.prototype.addHours = function (num = 1) {
        return this.timestamp + (times.hours * num);
    }

    /**
    * Add n number of days to the given timestamp
    * @return {Number} A unix timestamp for days
    */
    Constructor.prototype.addDays = function (num = 1) {
        return this.timestamp + (times.days * num);
    }

    /**
    * Add n number of weeks to the given timestamp
    * @return {Number} A unix timestamp for weeks
    */
    Constructor.prototype.addWeeks = function (num = 1) {
        return this.timestamp + (times.weeks * num);
    }

    /**
    * Add n number of months to the given timestamp
    * @return {Number} A unix timestamp for months
    */
    Constructor.prototype.addMonths = function (num = 1) {
        return this.timestamp + (times.months * num);
    }

    /**
    * Add n number of years to the given timestamp
    * @return {Number} A unix timestamp for years
    */
    Constructor.prototype.addYears = function (num = 1) {
        return this.timestamp + (times.years * num);
    }

    /**
    * Get a date in the future (or past) from a timestamp
    * @return {String} A formatted date string
    */
    Constructor.prototype.getDate = function (options = {}) {
        let format = Object.assign({
            dateStyle: 'long', 
            timeStyle: 'short', 
            hour12: true
        }, options)

        return new Date(this.timestamp).toLocaleString(navigator.language, format);
    }

    // Export functions
    // return {addHours, addDays, addWeeks, addMonths, addYears, getDate}
    return Constructor;

})();


let now = new Stamp();
console.log('now', now);
let threeDaysFromNow = now.addDays(3)
now.addDays(threeDaysFromNow);
console.log('3 days from now', new Stamp(threeDaysFromNow).getDate())
