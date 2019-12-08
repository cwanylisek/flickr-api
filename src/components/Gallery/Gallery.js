import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../../containers/Flicker/Flicker';

class Gallery extends Component {

    componentDidMount() {
        getPhotos();
        console.log('dsad')
    }

    render() {
        return (
            <div>
                Gallery
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getPhotos: () => dispatch(getPhotos())
})

export default connect(null, mapDispatchToProps)(Gallery);
