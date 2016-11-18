"use strict"

// considers England and Wales bank holidays only
const BANK_HOLIDAYS = [
  new Date(2016, 11, 26),
  new Date(2016, 11, 27),
  new Date(2017,  0,  2),
  new Date(2017,  3, 14),
  new Date(2017,  3, 17),
  new Date(2017,  4,  1),
  new Date(2017,  4, 29),
  new Date(2017,  7, 28),
  new Date(2017, 11, 25),
  new Date(2017, 11, 26),
  new Date(2018,  0,  1),
  new Date(2018,  2, 30),
  new Date(2018,  3,  2),
  new Date(2018,  4,  7),
  new Date(2018,  4, 28),
  new Date(2018,  7, 27),
  new Date(2018, 11, 25),
  new Date(2018, 11, 26)
]

module.exports = function(currentDate, daysToAdd) {
  incrementToNearestBusinessDay(currentDate)
  for (let i = 1; i <= daysToAdd; i++) {
    incrementByOneDay(currentDate)
    incrementToNearestBusinessDay(currentDate)
  }
  return currentDate
}

function incrementToNearestBusinessDay(date) {
  while (isWeekend(date) || isBankHoliday(date)) {
    incrementByOneDay(date)
  }
}

function incrementByOneDay(date) {
  date.setDate(date.getDate() + 1)
}

function isWeekend(currentDate) {
  return currentDate.getDay() == 0 || currentDate.getDay() == 6
}

function isBankHoliday(currentDate) {
  let dayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
  return BANK_HOLIDAYS.find(bankHoliday => bankHoliday - dayDate === 0)
}