import React, {Component} from "react";

class Counter extends Component{

    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }


    increase = (event) => {
        event.preventDefault();
        // pay attention: if we don't use arrow function here, this represent "Windows".
        this.setState({
            number: this.state.number + 100
        })
    }

    render() {
        return(
            <div>
                <h3>number is {this.state.number}</h3>
                <button onClick={this.increase}>click to increase</button>
            </div>
        )
    }
}

export default Counter;
