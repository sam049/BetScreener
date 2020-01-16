function convertToUnix(time) {
  //current time in unix
  const unixTime = Math.round(new Date(time).getTime() / 1000)
  return unixTime
}

function convertTimestamp(timestamp) {
  var d = new Date(timestamp * 1000),
    yyyy = d.getFullYear(),
    mm = ('0' + (d.getMonth() + 1)).slice(-2),
    dd = ('0' + d.getDate()).slice(-2),
    hh = d.getHours(),
    h = hh,
    min = ('0' + d.getMinutes()).slice(-2),
    ampm = 'AM',
    time

  if (hh > 12) {
    h = hh - 12
    ampm = 'PM'
  } else if (hh === 12) {
    h = 12
    ampm = 'PM'
  } else if (hh == 0) {
    h = 12
  }

  time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm
  return time
}

function filterResults(homeSpread, homeMoneyLine, overUnder, props) {
  let booleanVar = true

  // if no filter parameters, we want to return true and render everything
  if (!props) {
    return true
  }

  if (
    parseFloat(homeSpread) > parseFloat(props.maxHomeSpread) ||
    parseFloat(homeSpread) < parseFloat(props.minHomeSpread) ||
    parseFloat(homeMoneyLine) > parseFloat(props.maxHomeMoneyLine) ||
    parseFloat(homeMoneyLine) < parseFloat(props.minHomeMoneyLine) ||
    parseFloat(overUnder) > parseFloat(props.maxOverUnder) ||
    parseFloat(overUnder) < parseFloat(props.minOverUnder)
  ) {
    booleanVar = false
  }
  return booleanVar
}

function getSeason() {
  let sportArray = []
  let date = new Date()
  const month = date.getMonth()
  const day = date.getDate()
  if (month >= 8 || month === 0 || month === 1) {
    sportArray.push('NFL')
  }
  if (month >= 7 || (month === 0 && day <= 13)) {
    sportArray.push('NCAAF')
  }
  if (month >= 9 || month <= 5) {
    sportArray.push('NBA')
  }
  if (month >= 9 || month <= 3) {
    sportArray.push('NCAABB')
  }
  // console.log(sportArray)
  return sportArray
}
getSeason()

const keyObj = {
  'https://200.cheapdatafeeds.com/api/json/odds-main/v1/football/nfl': 'NFL',
  'https://201.cheapdatafeeds.com/api/json/odds-main/v1/football/ncaa':
    'NCAA Football',
  'https://203.cheapdatafeeds.com/api/json/odds-main/v1/basketball/nba': 'NBA',
  'https://202.cheapdatafeeds.com/api/json/odds-main/v1/basketball/ncaa':
    'NCAA Basketball'
}

module.exports = {
  convertTimestamp,
  keyObj,
  convertToUnix,
  filterResults,
  getSeason
}
