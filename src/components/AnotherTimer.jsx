import React, {Component} from 'react';
const TICK = 1000;
class AnotherTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count : props.count
        }
        this.timerId = null;
    }
    componentDidMount() {
        this.setupTimer();
    }
    stop = (e) => {
        e.preventDefault();
        clearInterval(this.timerId);
        this.timerId = null;
        this.forceUpdate(); // update UI, or the button will not change
    }
    setupTimer = () =>{
        this.timerId = setInterval(() => {
            this.setState({
                count : this.state.count - 1
            }, () => {
                if(this.state.count <= 0){
                    clearInterval(this.timerId);
                    this.timerId = null;
                    this.forceUpdate();
                }
            })
        }, TICK)
    }
    continue = (e) => {
        this.setupTimer();
    }
    render() {
        return (
            <div>
                {this.state.count}
                {this.timerId ? <button onClick={this.stop}>stop</button> : this.state.count > 0 && <button onClick={this.continue}>continue</button>}
            </div>
        );
    }
}
export default AnotherTimer;