import {Component} from 'react'
import './index.css'

class Clock extends Component {
  state = {
    date: new Date(),
    // console.log("Called")
  }

  componentDidMount() {
    console.log('componentDidmount Called')
    this.timerId = setInterval(this.tick, 5000)
  }

  componentWillUnmount() {
    console.log('component will Unmount called')
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state

    console.log('renderCalled', date)

    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p>{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
