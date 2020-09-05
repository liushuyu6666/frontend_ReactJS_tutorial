import React, {Component} from "react"

class BadTimer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            number: this.props.number
        };
        this.timer = setInterval(() => {
            this.setState({
                number: this.state.number - 1
            })
        }, 1000);
        this.continue = false
    }

    stopTimer = () => {
        clearTimeout(this.timer);
        this.continue = false;
    }

    continueTimer = () => {
        if(this.continue == false){
            this.continue = true;
            this.timer = setInterval(() => {
                if(this.state.number > 0){
                    this.setState({
                        number: this.state.number - 1
                    })
                }
                else{
                    clearTimeout(this.timer);
                }
            }, 1000)
        }
    }

    render(){

        return(
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.stopTimer}>stop</button>
                <button onClick={this.continueTimer}>continue</button>
            </div>
        )
    }
}

export default BadTimer