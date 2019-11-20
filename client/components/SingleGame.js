import React from 'react'
import {convertToUnix, convertTimestamp} from '../../util'

export default class SingleGame extends React.Component {
  constructor() {
    super()
  }
  render() {
    const testProps = this.props.params
    function filterResults(homeSpread, homeMoneyLine, overUnder) {
      // if no filter parameters, we want to return true and render everything
      if (!testProps) {
        return true
      }
      console.log('made it to the function', testProps.maxHomeSpread)
      // if (testProps.maxHomeSpread === '') {
      //   testProps.maxHomeSpread = undefined
      // }
      // if (testProps.minHomeSpread === '') {
      //   testProps.minHomeSpread = undefined
      // }
      // if (testProps.maxHomeMoneyLine === '') {
      //   testProps.maxHomeMoneyLine = undefined
      // }
      // if (testProps.minHomeMoneyLine === '') {
      //   testProps.minHomeMoneyLine = undefined
      // }
      // if (testProps.maxOverUnder = '') {
      //   testProps.maxOverUnder = undefined
      // }
      // if (testProps.minOverUnder === '') {
      //   testProps.minOverUnder = undefined
      // }
      //if any of our function input parameters (min/max etc) are undefined it should return false in the logic
      //need to check for emptry strings and set htose to undefined

      let booleanVar = true

      if (
        parseFloat(homeSpread) > parseFloat(testProps.maxHomeSpread) ||
        parseFloat(homeSpread) < parseFloat(testProps.minHomeSpread) ||
        parseFloat(homeMoneyLine) > parseFloat(testProps.maxHomeMoneyLine) ||
        parseFloat(homeMoneyLine) < parseFloat(testProps.minHomeMoneyLine) ||
        parseFloat(overUnder) > parseFloat(testProps.maxOverUnder) ||
        parseFloat(overUnder) < parseFloat(testProps.minOverUnder)
      ) {
        booleanVar = false
      }
      return booleanVar
    }

    const unixTime = convertToUnix(this.props.start)
    const gameStart = convertTimestamp(unixTime)
    const homeSpread = this.props.homeSpread
    const awaySpread = this.props.awaySpread
    const homeML = this.props.homeMoneyLine
    const awayML = this.props.awayMoneyLine
    const overUnder = this.props.totalPoints

    return filterResults(homeSpread, homeML, overUnder) ? (
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
