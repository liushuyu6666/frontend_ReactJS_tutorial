import React, {Component} from "react"

class TestsetState extends Component{
    constructor(props) {
        console.log("this is constructor");
        super(props);
        this.state = {
            data: 0
        }
    }

    render(){
        console.log("this is render");
        return(
            <div>
                {/*<p>{this.state.data}</p>*/}
            </div>
        )
    }

    componentDidMount() {
        console.log("this is componentdidmount");
        this.setState({
            data: this.state.data + 1
        })
        for(let j = 0; j < 1000; j++){
            console.log(this.state.data); // output 0
        }
    }

}

export default TestsetState