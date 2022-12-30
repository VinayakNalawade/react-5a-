// Write your code here
import './index.css'

import {Component} from 'react'

class Welcome extends Component {
  state = {msg: 'Subscribe'}

  msgs = () => {
    const {msg} = this.state
    if (msg === 'Subscribe') {
      this.setState(() => ({msg: 'Subscribed'}))
    } else {
      this.setState(() => ({msg: 'Subscribe'}))
    }
  }

  render() {
    const {msg} = this.state

    return (
      <div className="mainContainer">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.msgs}>
          {msg}
        </button>
      </div>
    )
  }
}

export default Welcome
