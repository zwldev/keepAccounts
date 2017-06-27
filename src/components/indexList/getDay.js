module.exports = function (year, month) {
  var bigMonth = [1, 3, 5, 7, 8, 10, 12]
  let day
  day = bigMonth.indexOf(Number(month)) > -1 ? 31 : 30
  if (Number(month) === 2) {
    day = (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28
  }
  return day
}
