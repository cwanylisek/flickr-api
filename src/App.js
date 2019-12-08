import React, { Component } from 'react';
import { Route } from 'react-router';
import logo from './logo.svg';
import './App.scss';
import { Navbar } from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Gallery from './components/Gallery/Gallery';

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




function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <Route exact path="/" component={Profile} />
                <Route path="/gallery" component={Gallery} />
            </main>
        </div>
    );
}

export default App;
