import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardsList from '../components/CardsList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

import { setSearchField, requestRobots } from './../actions';


const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)), 
        // onRequestRobots: () => requestRobots(dispatch)
        onRequestRobots: () => dispatch(requestRobots())
    }   
} 

class App extends Component {

    componentDidMount(){
        this.props.onRequestRobots();
    }
 
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render(){
        const { searchField, onSearchChange, robots, isPending } = this.props;

        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ? 
        <h1>loading</h1> :
        (
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