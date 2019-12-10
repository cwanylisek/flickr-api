import React from 'react';
import { Route } from 'react-router';
import './App.scss';
import { Navbar } from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Gallery from './components/Gallery/Gallery';
import WithLoading from './hoc/withLoading';

function App() {
    const GalleryWithLoading = WithLoading(Gallery);

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
