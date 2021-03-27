import React from "react"

function hocCounter(Component) {
    return class HocCounter extends React.Component {
        state = {
            count: 0
        }

        decrement = () => {
            this.setState({
                count: this.state.count - 1
            })
        }

        increment = () => {
            this.setState({
                count: this.state.count + 1
            })
        }

      render() {
        return <Component decrement = {this.decrement} increment = {this.increment} count = {this.state.count}/>
      }
    }
  }

  export default hocCounter

  