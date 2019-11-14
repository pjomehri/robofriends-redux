import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardsList from '../components/CardsList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

import { setSearchField } from './../actions';


const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)) 
    }   
} 

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }))
    }
 
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render(){
        const { searchField, onSearchChange } = this.props;

        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1>RoboFriends Redux</h1>
                <SearchBox SearchField={searchField} SearchChange={onSearchChange}/>
                <Scroll>
                    <CardsList robots={filterRobots}/>
                </Scroll>
            </div>
        )  
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);