import axios from 'axios'
require('../../secrets')

const GOT_GAMES = 'GOT_GAMES'
// const GOT_MONEYLINES = 'GOT_MONEYLINES'
const GOT_KEY = 'GOT_KEY'

const gotGames = games => ({type: GOT_GAMES, games})
// const gotMoneyLines = games => ({type: GOT_MONEYLINES, games})
const gotKey = key => ({type: GOT_KEY, key})

const defaultSportKey = 'football/nfl'
const apiKey = process.env.API_KEY

export const getGames = (key = defaultSportKey) => async dispatch => {
  try {
    const {data} = await axios.get(
      `https://cheapdatafeeds2.com/api/json/odds/v1/${key}?api-key=${apiKey}`
    )
    dispatch(gotGames(data))
    dispatch(gotKey(key))
  } catch (error) {
    console.error(error)
  }
}

// export const getMoneyLines = (key = defaultSportKey) => async dispatch => {
//   try {
//     const {data} = await axios.get(
//       `https://cheapdatafeeds2.com/api/json/odds/v1/football/nfl?api-key=${apiKey}`
//     )
//     dispatch(gotMoneyLines(data))
//     dispatch(gotKey(key))
//   } catch (error) {
//     console.error(error)
//   }
// }

const gamesState = {
  games: [],
  sportKey: ''
}

const gamesReducer = (state = gamesState, action) => {
  //   console.log('action' + action)
  switch (action.type) {
    case GOT_GAMES:
      return {...state, games: action.games}
    // case GOT_MONEYLINES:
    //   return {...state, moneylineGames: action.games}
    case GOT_KEY:
      return {...state, sportKey: action.key}
    default:
      return state
  }
}

export default gamesReducer
