import { CHANGE_SEARCH_FIELD } from './constants';

const initialState = {
    searchField: ''
}

// Reducers: It describes how an action transforms the state into the next state.
// searchRobots is the reducer and multiple actions will act on it...
export const searchRobots = (state=initialState, action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            // return { ...state, searchField: action.payload }
            return Object.assign({}, state, {searchField: action.payload})
        default:
            return state;
    }
}