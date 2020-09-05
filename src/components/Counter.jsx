import React, {Component} from "react"

class Counter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            score: 0
        }
    }

    addOne = (event) => {
        event.preventDefault();

        this.setState({
            score: this.state.score + 1
        })
    }

    render(){
        return(
            <div>
                <p>{this.state.score}</p>
                <button onClick={this.addOne}>add one</button>
            </div>
        )
    }
}

export default Counter