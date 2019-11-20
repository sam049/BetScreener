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

function convertMoneyLine(Odds) {
  if (Odds >= 2) {
    return `+${((Odds - 1) * 100).toFixed(0)}`
  } else {
    return `${(-100 / (Odds - 1)).toFixed(0)}`
  }
}

const keyObj = {
  'football/nfl': 'NFL',
  'football/ncaa': 'NCAA Football',
  'basketball/nba': 'NBA',
  'basketball/ncaa': 'NCAA Basketball'
}

// function filterResults(homeSpread, homeMoneyLine, overUnder) {
//   console.log(homeSpread)
//   if (this.props.params) {
//     console.log('returning true')
//     return true
//   }
//   console.log('made it to the function', this.props.params)
//   let paramsArray = [homeSpread, homeMoneyLine, overUnder]
//   for (let i = 0; i < paramsArray.length; i++) {
//     if (paramsArray[i] === undefined) {
//       paramsArray[i] = this.props.params[paramsArray[i]]
//     }
//   }
//   let booleanVar = true
//   if (homeSpread > this.props.params.maxHomeSpread || homeSpread < this.props.params.minHomeSpread ||
//       homeMoneyLine > this.props.params.maxHomeMoneyLine || homeMoneyLine < this.props.params.minHomeMoneyLine ||
//       overUnder > this.props.params.maxOverUnder || overUnder < this.props.params.minOverUnder) {
//         booleanVar = false
//     }
//   return booleanVar
// }

module.exports = {convertTimestamp, convertMoneyLine, keyObj, convertToUnix}
