const leapYear = (year) => (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0) ? true : false

console.log(leapYear(2020))