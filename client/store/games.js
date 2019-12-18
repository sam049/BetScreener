import axios from 'axios'
require('../../secrets')

const GOT_GAMES = 'GOT_GAMES'
// const GOT_MONEYLINES = 'GOT_MONEYLINES'
const GOT_KEY = 'GOT_KEY'

const gotGames = games => ({type: GOT_GAMES, games})
// const gotMoneyLines = games => ({type: GOT_MONEYLINES, games})
const gotKey = key => ({type: GOT_KEY, key})

const defaultSportKey =
  'https://200.cheapdatafeeds.com/api/json/odds-main/v1/football/nfl'
const apiKey = process.env.API_KEY

export const getGames = (key = defaultSportKey) => async dispatch => {
  try {
    const {data} = await axios.get(
      `${key}?api-key=${apiKey}`
      // 'https://200.cheapdatafeeds.com/api/json/odds-main/v1/football/nfl?api-key=1f996e202fe213a7c2f632129814f24f'
    )
    dispatch(gotGames(data))
    dispatch(gotKey(key))
  } catch (error) {
    console.error(error)
  }
}

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
