import React, {Component} from "react";

class TestsetState extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: 0,
            data2: 0
        }
        this.times = 0
    }

    multiCall = () => {
        this.setState({data: this.state.data + 1});
        this.setState({data: this.state.data + 2});
        this.setState({data: this.state.data + 3});
    }

    checksetstate = () => {
        this.setState({data2: this.state.data2 + 3});
        setTimeout(() =>
            console.log("this is in the timeout " + this.state.data2), 0);
        for(let i = 0; i < 50000; i++){
            if( i / 2000 == 0){
                console.log("yes");
            }
        }

    }

    render(){
        this.times++;
        let timestamp = Date.now();
        console.log("this is render " + this.times
            + " and this.state is " + this.state
            + " at " + timestamp);
        return(
            <div>
                <p>{this.state.data}</p>
                <button key = {1} onClick={this.multiCall}>test multiple call</button>
                <br/>
                <p>{this.state.data2}</p>
                <button key = {2} onClick={this.checksetstate}>check setState</button>
                <br/>
            </div>
        )
    }

    componentDidMount() {

    }
}

export default TestsetState