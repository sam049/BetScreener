import React from 'react'
import {Grid, Divider} from 'semantic-ui-react'
import {convertToUnix, convertTimestamp, filterResults} from '../../../util'
import './style.css'

export default class SingleGame extends React.Component {
  constructor() {
    super()
  }
  render() {
    console.log(this.props)
    // convert start time to readable time
    const unixTime = convertToUnix(this.props.start)
    const gameStart = convertTimestamp(unixTime).slice(5)

    const homeSpread = this.props.homeSpread
    const homeSpreadOdds = this.props.homeSpreadOdds
    const awaySpread = this.props.awaySpread
    const awaySpreadOdds = this.props.awaySpreadOdds
    const homeML = this.props.homeMoneyLine
    const awayML = this.props.awayMoneyLine

    const overUnder = this.props.totalPoints
    const overOdds = this.props.overOdds
    const underOdds = this.props.underOdds

    return filterResults(homeSpread, homeML, overUnder, this.props.params) ? (
      <Grid.Row className="gameRow">
        <Grid.Column> Game Start - {gameStart} </Grid.Column>
        <Grid.Column>
          Home Team - {this.props.homeTeam} Spread: {homeSpread}{' '}
          {homeSpreadOdds} MoneyLine: {!homeML ? 'Not Available' : homeML}
        </Grid.Column>
        <Grid.Column>
          Away Team - {this.props.awayTeam} Spread: {awaySpread}{' '}
          {awaySpreadOdds} MoneyLine: {!awayML ? 'Not Available' : awayML}
        </Grid.Column>
        <Grid.Column>
          Total:{' '}
          {!overUnder
            ? 'Not Available'
            : `Over ${overUnder} ${overOdds} Under ${overUnder} ${underOdds}`}
        </Grid.Column>
      </Grid.Row>
    ) : null
  }
}
