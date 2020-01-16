import React from 'react'
import {getSeason} from '../../util'

export default class DropdownList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false
    }
    this.showList = this.showList.bind(this)
  }

  showList(event) {
    event.preventDefault()
    this.setState({listOpen: !this.state.listOpen}, () => {})
  }

  render() {
    console.log(getSeason())
    return (
      <div>
        <div type="button" onClick={this.showList}>
          Select A Sport
        </div>
        <br />
        {this.state.listOpen ? (
          <ul>
            {getSeason().includes('NFL') ? (
              <li
                onClick={() => {
                  this.props.handler(
                    'https://200.cheapdatafeeds.com/api/json/odds-main/v1/football/nfl'
                  )
                }}
              >
                NFL
              </li>
            ) : null}
            {getSeason().includes('NCAAF') ? (
              <li
                onClick={() => {
                  this.props.handler(
                    'https://201.cheapdatafeeds.com/api/json/odds-main/v1/football/ncaa'
                  )
                }}
              >
                NCAAF
              </li>
            ) : null}
            {getSeason().includes('NBA') ? (
              <li
                onClick={() => {
                  this.props.handler(
                    'https://203.cheapdatafeeds.com/api/json/odds-main/v1/basketball/nba'
                  )
                }}
              >
                NBA
              </li>
            ) : null}
            {getSeason().includes('NCAABB') ? (
              <li
                onClick={() => {
                  this.props.handler(
                    'https://202.cheapdatafeeds.com/api/json/odds-main/v1/basketball/ncaa'
                  )
                }}
              >
                NCAABB
              </li>
            ) : null}
          </ul>
        ) : null}
      </div>
    )
  }
}
