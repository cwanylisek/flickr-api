import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../../containers/Flicker/Flicker';

class Gallery extends Component {

    componentDidMount() {
        this.props.getPhotos();
    }

    render() {
        return (
            <div>
                Gallery
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    flickrPhotos: state.photosReducer.flickrPhotos
})

const mapDispatchToProps = dispatch => ({
    getPhotos: () => dispatch(getPhotos())
})

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
