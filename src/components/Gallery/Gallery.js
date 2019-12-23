import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../../containers/Flicker/Flicker';
import './Gallery.scss';

class Gallery extends Component {

    componentDidMount() {
        this.props.getPhotos();
    }

    render() {
        const photos = this.props.flickrPhotos.map((photo, index) => {
            return (
                <div className="gallery__img-box" key={index}>
                    <span><a href={photo.url} target="_blank"><img className="gallery__img" alt="marilyn" src={photo.source} /></a></span>
                </div>
            )
        })

        return (
            <div className="gallery__container">
                {photos}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.photosReducer.isLoading,
    flickrPhotos: state.photosReducer.flickrPhotos
})

const mapDispatchToProps = dispatch => ({
    getPhotos: () => dispatch(getPhotos())
})

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
