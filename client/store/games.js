import axios from 'axios'
require('../../secrets')

const GOT_GAMES = 'GOT_GAMES'
const GOT_KEY = 'GOT_KEY'

const gotGames = games => ({type: GOT_GAMES, games})
const gotKey = key => ({type: GOT_KEY, key})

const defaultSportKey =
  'https://200.cheapdatafeeds.com/api/json/odds-main/v1/football/nfl'
const apiKey = process.env.API_KEY

//fetches data to match user selected league...defaults to NFL
export const getGames = (key = defaultSportKey) => async dispatch => {
  try {
    const {data} = await axios.get(`${key}?api-key=${apiKey}`)
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
  switch (action.type) {
    case GOT_GAMES:
      return {...state, games: action.games}
    case GOT_KEY:
      return {...state, sportKey: action.key}
    default:
      return state
  }
}

export default gamesReducer
