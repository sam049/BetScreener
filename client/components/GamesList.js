import React from 'react'
import {connect} from 'react-redux'
import {getGames} from '../store/games'
import SingleGame from './SingleGame'
import DropdownList from './DropdownList'
import FilterForm from './FilterForm'
import {keyObj, convertToUnix} from '../../util'

class GamesList extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.handler = this.handler.bind(this)
    this.stateSetter = this.stateSetter.bind(this)
  }

  componentDidMount() {
    this.props.getGames()
    // console.log(this.state)
  }

  handler(key) {
    this.props.getGames(key)
  }
  stateSetter(params) {
    this.setState({params})
    //       if (this.state.params) {console.log('XXXXXXXX', this.state.params) }
  }

  render() {
    const games = this.props.games.games
    const sportKey = this.props.sportKey
    if (!games) {
      return <div>loading</div>
    } else {
      const gamesArray = Object.entries(games)
      return (
        <div>
          <h1>{keyObj[sportKey]}</h1>
          <DropdownList handler={this.handler} />
          <FilterForm stateSetter={this.stateSetter} />
          {gamesArray.map(
            (game, index) =>
              game[1].homeTeam != 'Will Be available for all games' &&
              Date.now()
                .toString()
                .slice(0, -3) < convertToUnix(game[1].startDate) ? (
                <div key={index}>
                  <SingleGame
                    params={this.state.params}
                    homeTeam={game[1].homeTeam}
                    awayTeam={game[1].awayTeam}
                    start={game[1].startDate}
                    homeSpread={game[1].gameSpreadHomeHandicap}
                    awaySpread={game[1].gameSpreadAwayHandicap}
                    homeMoneyLine={game[1].gameMoneylineHomePriceUS}
                    awayMoneyLine={game[1].gameMoneylineAwayPriceUS}
                    totalPoints={game[1].gameTotalPoints}
                  />
                </div>
              ) : null
          )}
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  games: state.games.games,
  sportKey: state.games.sportKey
})

const mapDispatchToProps = dispatch => ({
  getGames: key => dispatch(getGames(key))
})

export default connect(mapStateToProps, mapDispatchToProps)(GamesList)
