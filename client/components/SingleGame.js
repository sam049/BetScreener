import React from 'react'
import {convertToUnix, convertTimestamp, filterResults} from '../../util'

export default class SingleGame extends React.Component {
  constructor() {
    super()
  }
  render() {
    // convert to readable time
    const unixTime = convertToUnix(this.props.start)
    const gameStart = convertTimestamp(unixTime)

    const homeSpread = this.props.homeSpread
    const awaySpread = this.props.awaySpread
    const homeML = this.props.homeMoneyLine
    const awayML = this.props.awayMoneyLine
    const overUnder = this.props.totalPoints

    return filterResults(homeSpread, homeML, overUnder, this.props.params) ? (
      <table>
        <tbody>
          <tr>
            <td>Game Start - {gameStart}</td>
            <td>
              Home Team - {this.props.homeTeam} Spread: {homeSpread} MoneyLine:{' '}
              {!homeML ? 'Not Available' : homeML}
            </td>
            <td>
              Away Team - {this.props.awayTeam} Spread: {awaySpread} MoneyLine:{' '}
              {!awayML ? 'Not Available' : awayML}
            </td>
            <td>Over/Under: {!overUnder ? 'Not Available' : overUnder}</td>
          </tr>
        </tbody>
      </table>
    ) : null
  }
}
