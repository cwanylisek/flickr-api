import types from './types';
import { combineReducers } from 'redux';

const INITIAL_STATE = {
    listName: 'Favorite',
    animals: [
        'Cat',
        'Dog',
        'Giraffe'
    ]
}

const animalsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_ANIMALS:
                return {
                    ...state,
                    animals: [...state.animals, action.animals]
                }
        case types.RESET_ANIMALS:
            return {
                ...state,
                animals: []
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    animals: animalsReducer
})

export default rootReducer;