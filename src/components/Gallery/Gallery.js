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
                <div key={index}>
                    <p><a href={photo.url} target="_blank"><img className="gallery__img" alt="marilyn" src={photo.source} /></a></p>
                </div>
            )
        })

        return (
            <React.Fragment>
                {photos}
            </React.Fragment>
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
