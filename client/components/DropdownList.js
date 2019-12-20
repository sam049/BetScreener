import React from 'react'

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
    this.setState({listOpen: !this.state.listOpen}, () => {
      console.log(this.state.listOpen)
    })
  }

  render() {
    return (
      <div>
        <div type="button" onClick={this.showList}>
          Select A Sport
        </div>
        <br />
        {this.state.listOpen ? (
          <ul>
            <li
              onClick={() => {
                this.props.handler(
                  'https://200.cheapdatafeeds.com/api/json/odds-main/v1/football/nfl'
                )
              }}
            >
              NFL
            </li>
            <li
              onClick={() => {
                this.props.handler(
                  'https://201.cheapdatafeeds.com/api/json/odds-main/v1/football/ncaa'
                )
              }}
            >
              NCAAF
            </li>
            <li
              onClick={() => {
                this.props.handler(
                  'https://203.cheapdatafeeds.com/api/json/odds-main/v1/basketball/nba'
                )
              }}
            >
              NBA
            </li>
            <li
              onClick={() => {
                this.props.handler(
                  'https://202.cheapdatafeeds.com/api/json/odds-main/v1/basketball/ncaa'
                )
              }}
            >
              NCAABB
            </li>
          </ul>
        ) : null}
      </div>
    )
  }
}
