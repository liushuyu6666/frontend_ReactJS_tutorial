import React, {Component} from "react"

class Table extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>completed</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.data.map(item =>(
                        <tr key={item.id}>
                            <td>{item.userId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.completed?"true":"false"}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        )
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
            .then(res=>res.json())
            .then(data=>this.setState({data:data}))
    }
}



export default Table