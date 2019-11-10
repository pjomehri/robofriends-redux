import React, { Component } from 'react';
// import { robots } from './robots';
import CardsList from '../components/CardsList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            SearchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }))
    }
 
    onSearcChange = (event) => {
        this.setState({ SearchField: event.target.value })
    }

    render(){
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.SearchField.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1>RoboFriends Redux</h1>
                <SearchBox SearchField={this.state.SearchField} SearchChange={this.onSearcChange}/>
                <Scroll>
                    <CardsList robots={filterRobots}/>
                </Scroll>
            </div>
        )  
    }
};

export default App;