import types from './types';
import { combineReducers } from 'redux';

const INITIAL_STATE = {
    listName: 'Favorite',
    animals: [
        'Cat',
        'Dog',
        'Giraffe'
    ],
    userData: [
        {
            id: 1,
            firstName: 'Marilyn',
            lastName: 'Monroe',
            city: 'Poznan',
            country: 'PL',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum provident culpa voluptas officiis odit consectetur iure. Laborum vero quis, mollitia expedita iste eveniet laudantium ab nam, assumenda id porro veritatis.',
            quote: "If you're gonna be two-faced at least make one of them pretty."
        }
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
    animalsReducer
})

export default rootReducer;