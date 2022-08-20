import { Component } from "react";


export default class Component1 extends Component
{
    constructor()
    {
        super();
        this.state = {
            movies : ["Avatar","Avengers","3-idiots","Furious7","Minions","Skyfall","Asur","Frozen","Panchayat","Titanic"],
            list : ""
        }
    }

    handler = (event)=>{
        var deleteMovie = event.target.value;
        var updatedMovies = this.state.movies;
        var index = updatedMovies.indexOf(deleteMovie);
        updatedMovies.splice(index,1);
        this.setState({movies : updatedMovies})
        this.componentDidMount();
    }

    componentDidMount(){
        let str = this.state.movies.map((e,index) => {
            return(
                <li key={index}>{e}
                <button onClick={this.handler} value={e} >Delete</button>
                </li>
            )
        })
        this.setState({ list : str })
    }

    render(){
        return(
            <div>
                <ol>{this.state.list}</ol>
            </div>
        )
    }
}