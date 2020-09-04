import React, {Component} from "react";

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
                    {this.state.data.map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.userId}</td>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td>{todo.completed?"true" : "false"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=20")
            .then((response) => response.json())
            .then(data => {
                this.setState({
                    data: data
                });
            });
    }
}

export default Table;