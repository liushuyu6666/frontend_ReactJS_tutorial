import React, {Component} from "react"

class TurnPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            page: 1
        };
    }

    prevPage = (event) => {
        event.preventDefault();

        if(this.state.page > 1){
            this.setState({
                page: this.state.page - 1
            })
            var url = 'https://jsonplaceholder.typicode.com/todos?_limit=' + ((this.state.page - 1) * 20);
        }

        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({
                data: data
            }))
    }

    nextPage = (event) => {
        event.preventDefault();

        if(this.state.page <= 9){
            this.setState({
                page: this.state.page + 1
            })

            var url = 'https://jsonplaceholder.typicode.com/todos?_limit=' + ((this.state.page + 1) * 20);

        }

        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({
                data: data
            }))
    }

    render(){

        return(
            <div>
                <p>{this.state.page}</p>
                <table>
                    <thead>
                        <tr>
                            <td>userId</td>
                            <td>id</td>
                            <td>title</td>
                            <td>completed</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.data.map(item => (
                            // console.log(this.state.page)
                            (item.id > (this.state.page - 1) * 20 && item.id <= this.state.page * 20)?
                            (<tr>
                                <th>{item.userId}</th>
                                <th>{item.id}</th>
                                <th>{item.title}</th>
                                <th>{item.completed ? "true" : "false"}</th>
                            </tr>):
                                (null)
                        ))
                    }
                    </tbody>
                </table>
                <button onClick={this.prevPage}>previous page</button>
                <button onClick={this.nextPage}>next page</button>
            </div>
        )
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
            .then(res => res.json())
            .then(data => (
                this.setState({
                    data: data
                })
            ))
    }
}

export default TurnPage