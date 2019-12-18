const axios = require('axios')
// api-key=2ca6b5ac698b2a3cfecf45204e3e9387
async function test() {
  const {data} = await axios.get(
    'https://203.cheapdatafeeds.com/api/json/odds-main/v1/basketball/nba?api-key=1f996e202fe213a7c2f632129814f24f'
  )
  console.log(data.games[0])
  // console.log(data.data.data[0].sites[0].odds.spreads.odds)
  // console.log('>>>>>>>>>>>>>>>>>')
  // console.log(data.data.data)
  // console.log(typeof data.data.data[0].sites[0].odds.spreads.odds)
  // homeOdds = data.data.data[0].sites
}

test()

//moneyline format --- 2.3 === +130, 1.67 === -150...
// >= 2... 2.x - 1 * 100
//convert h2h odds < 2 to moneyline 1.67 on bookmaker = -150...essentially paying out 2/3
// 2 - 1.67 = .33 100 * 1.33
