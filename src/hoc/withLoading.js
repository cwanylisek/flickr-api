import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

function withLoading(Cmp) {
    return (props) => {
        const { isLoading, ...passThroughProps } = props

        if (isLoading) {
            return (
                <div>
                    loadinggggg!
                </div>
            )
        } 
            
        return <Cmp {...passThroughProps} />;
        
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.photosReducer.isLoading,
})

const composedExport = compose(
    connect(mapStateToProps, null),
    withLoading
)

export default composedExport;