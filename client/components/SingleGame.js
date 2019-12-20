import React from 'react'
import {convertToUnix, convertTimestamp, filterResults} from '../../util'

export default class SingleGame extends React.Component {
  constructor() {
    super()
  }
  render() {
    console.log(this.props)
    // convert start time to readable time
    const unixTime = convertToUnix(this.props.start)
    const gameStart = convertTimestamp(unixTime)

    const homeSpread = this.props.homeSpread
    const homeSpreadOdds = this.props.homeSpreadOdds
    const awaySpread = this.props.awaySpread
    const awaySpreadOdds = this.props.awaySpreadOdds
    const homeML = this.props.homeMoneyLine
    const awayML = this.props.awayMoneyLine

    const overUnder = this.props.totalPoints
    const overOdds = this.props.gameTotalOverPriceUS
    const underOdds = this.props.gameTotalUnderPriceUS

    return filterResults(homeSpread, homeML, overUnder, this.props.params) ? (
      <table>
        <tbody>
          <tr>
            <td>Game Start - {gameStart}</td>
            <td>
              Home Team - {this.props.homeTeam} Spread: {homeSpread}{' '}
              {homeSpreadOdds} MoneyLine: {!homeML ? 'Not Available' : homeML}
            </td>
            <td>
              Away Team - {this.props.awayTeam} Spread: {awaySpread}{' '}
              {awaySpreadOdds} MoneyLine: {!awayML ? 'Not Available' : awayML}
            </td>
            <td>
              Total:{' '}
              {!overUnder
                ? 'Not Available'
                : `Over ${overUnder} ${overOdds} Under ${overUnder} ${underOdds}`}
            </td>
          </tr>
        </tbody>
      </table>
    ) : null
  }
}
