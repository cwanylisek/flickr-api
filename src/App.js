import React, { Component } from 'react';
import { Route } from 'react-router';
import './App.scss';
import { Navbar } from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Gallery from './components/Gallery/Gallery';
import withLoading from './hoc/withLoading';

class App extends Component {

    render() {
        const GalleryWithLoading = withLoading(Gallery);

        return (
            <div className="App">
                <Navbar />
                <main>
                    <Route exact path="/" component={Profile} />
                    <Route path="/gallery" component={GalleryWithLoading} />
                </main>
            </div>
        );
    }
}

export default App;
