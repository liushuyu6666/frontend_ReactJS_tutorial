import React, {Component} from "react"

class Timer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            time: 100,
            timer: null,
            continue: true
        }


    }

    stopTimer = (event) => {
        event.preventDefault();
        clearTimeout(this.state.timer);
        this.setState({
            continue: false
        })

    }

    continueTimer = (event) => {
        event.preventDefault();
        if(this.state.continue == false){
            this.setState({
                continue: true,
                timer: setInterval(() => this.setState({
                    time: this.state.time > 0? this.state.time - 1: this.state.time
                }),1000)
            })
        }

    }

    render(){

        return(
            <div>
                <h3>{this.state.time}</h3>
                <button onClick={this.stopTimer}>stop</button>
                <button onClick={this.continueTimer}>continue</button>
            </div>
        )
    }

    componentDidMount() {
        this.setState({
            timer: setInterval(() => this.setState({
                time: this.state.time > 0? this.state.time - 1: this.state.time
            }),1000)
        })
    }
}

export default Timer