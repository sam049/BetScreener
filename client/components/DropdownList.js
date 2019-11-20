import React from 'react'

export default class DropdownList extends React.Component {
  constructor(props) {
    super()
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
                this.props.handler('football/nfl')
              }}
            >
              NFL
            </li>
            <li
              onClick={() => {
                this.props.handler('football/ncaa')
              }}
            >
              NCAAF
            </li>
            <li
              onClick={() => {
                this.props.handler('basketball/nba')
              }}
            >
              NBA
            </li>
            <li
              onClick={() => {
                this.props.handler('basketball/ncaa')
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
