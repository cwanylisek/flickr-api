import React, { Component } from 'react'

const WithLoading = (props) => {
    return class extends Component {
        render() {
            const { loading, ...PassThroughProps} = props;

            if (loading) {
                return (
                    <div>loading</div>
                );
            }
            return <WithLoading {...PassThroughProps} />
        }
    }
}

export default WithLoading