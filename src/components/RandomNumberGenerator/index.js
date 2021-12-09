import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  randomClickButton = () => {
    const randomNumbers = Math.ceil(Math.random() * 100)

    this.setState({count: randomNumbers})
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="random-number-generator-container">
          <h1 className="heading">Random Numbers</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="generate-button"
            type="button"
            onClick={this.randomClickButton}
          >
            Generate
          </button>
          <p>{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
