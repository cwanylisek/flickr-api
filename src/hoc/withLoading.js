import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getPhotos } from '../containers/Flicker/Flicker'
import Spinner from 'react-spinkit'

const spinnerSyle = {
    marginTop: '20vh'
}

function withLoading(Cmp) {
    return (props) => {
        const { isLoading, getPhotos, ...passThroughProps } = props

        if (isLoading) {
            getPhotos();
            return (
                <React.Fragment>
                    <Spinner name="line-scale" noFadeIn color="#7AD6BB" style={spinnerSyle} />
                </React.Fragment>
            )
        } 
            
        return <Cmp {...passThroughProps} />;
        
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.photosReducer.isLoading,
})

const mapDispatchToProps = dispatch => ({
    getPhotos: () => dispatch(getPhotos())
})

const composedExport = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withLoading
)

export default composedExport;