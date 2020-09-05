import React, {Component} from "react"

class TestsetState extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: 0
        }
    }

    render(){
        console.log("this is render");
        return(
            <div>
                <p>{this.state.data}</p>
            </div>
        )
    }

    componentDidMount() {
        console.log("this is componentdidmount");
    }

}

export default TestsetState