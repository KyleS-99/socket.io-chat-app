const moment = require('moment');

// let date = moment();
// date.add(1, 'year').subtract(20, 'years').add(1, 'month').add(7, 'days');
// console.log(date.format('MMM Do, YYYY'));
//console.log(date.format('h:MM A'));

let someTimestamp = moment().valueOf();
console.log(someTimestamp);

let createdAt = 1234;
let date = moment(createdAt);
console.log(date.format('h:mm A'));