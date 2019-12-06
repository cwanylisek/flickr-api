import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, bindActionCreators } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store/reducers';

import actions from './store/actions';

// const initialFruits = {
//     listFruits: 'Favorite',
//     fruits: [
//         'Apple',
//         'Banana',
//         'Strawberry'
//     ]
// }

// function fruits(state = initialFruits, action) {
//     switch (action.type) {
//         case 'ADD_FRUIT':
//                 return {
//                     ...state,
//                     fruits: [...state.fruits, action.fruits]
//                 }
//         case 'RESET_FRUIT':
//             return {
//                 ...state,
//                 fruits: []
//             }
//         default:
//             return state
//     }
// }
// store.dispatch({type: 'ADD_FRUIT', fruits: 'Peach'});

// const addAnimals = animals => ({type: 'ADD_ANIMALS', animals});
// const reset = () => ({type: 'RESET_ANIMALS'});

// store.dispatch(addAnimals('Lucek'));

// const animalsActions = bindActionCreators({add: addAnimals, reset}, store.dispatch)

// animalsActions.add('Lama')
//animalsActions.reset();


const store = createStore(rootReducer, composeWithDevTools());

store.dispatch(actions.add('testtt'));

window.store = store

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
        </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a>
            </header>
        </div>
    );
}

export default App;
