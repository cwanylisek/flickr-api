import types from './types';
import { combineReducers } from 'redux';

const INITIAL_STATE = {
    listName: 'Favorite',
    animals: [
        'Cat',
        'Dog',
        'Giraffe'
    ],
    flickrPhotos: [],
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


const photosReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD:
                return {
                    ...state,
                    flickrPhotos: [...state.flickrPhotos, action.photos]
                }
        case types.RESET:
            return {
                ...state,
                animals: []
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    photosReducer
})

export default rootReducer;