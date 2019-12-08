import React, { Component } from 'react'
import { connect } from 'react-redux'

const Profile = props => {

    const data = props.userData.map(item => {
        return (
            <div key={item.id}>
                <p>{item.firstName}</p>
                <p>{item.lastName}</p>
                <p>{item.city}</p>
                <p>{item.country}</p>
                <p>{item.text}</p>
                <p>{item.quote}</p>
            </div>
        )
    })
    
    return (
        <React.Fragment>
            {data}
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    userData: state.animalsReducer.userData
})

export default connect(mapStateToProps, null)(Profile)
