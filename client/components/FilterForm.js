import React from 'react'

export default class FilterForm extends React.Component {
  constructor() {
    super()
    this.state = {
      maxHomeSpread: '',
      minHomeSpread: '',
      maxHomeMoneyLine: '',
      minHomeMoneyLine: '',
      maxOverUnder: '',
      minOverUnder: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    // this.props.stateSetter(this.state)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.stateSetter(this.state)
  }

  render() {
    return (
      <form>
        <label>
          Maximum Home Spread
          <input
            type="integer"
            name="maxHomeSpread"
            onChange={this.handleChange}
            value={this.state.maxHomeSpread}
          />
        </label>

        <label>
          Minimum Home Spread
          <input
            type="integer"
            name="minHomeSpread"
            onChange={this.handleChange}
            value={this.state.minHomeSpread}
          />
        </label>

        <label>
          Maximum Home MoneyLine
          <input
            type="integer"
            name="maxHomeMoneyLine"
            onChange={this.handleChange}
            value={this.state.maxHomeMoneyLine}
          />
        </label>

        <label>
          Minimum Home MoneyLine
          <input
            type="integer"
            name="minHomeMoneyLine"
            onChange={this.handleChange}
            value={this.state.minHomeMoneyLine}
          />
        </label>

        <label>
          Maximum Over/Under
          <input
            type="integer"
            name="maxOverUnder"
            onChange={this.handleChange}
            value={this.state.maxOverUnder}
          />
        </label>

        <label>
          Minimum Over/Under
          <input
            type="integer"
            name="minOverUnder"
            onChange={this.handleChange}
            value={this.state.minOverUnder}
          />
        </label>
        <button onClick={this.handleSubmit}>Filter Results</button>
      </form>
    )
  }
}
