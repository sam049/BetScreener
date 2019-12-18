import React from 'react'

export default class DropdownList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false
    }
    this.showList = this.showList.bind(this)
    this.hideList = this.showList.bind(this)
  }

  showList(event) {
    event.preventDefault()
    this.setState({listOpen: true}, () => {
      document.addEventListener('click', this.hideList)
    })
  }

  hideList() {
    this.setState({listOpen: false}, () => {
      document.addEventListener('click', this.hideList)
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
