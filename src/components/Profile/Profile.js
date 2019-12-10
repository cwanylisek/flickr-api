import React from 'react'
import { connect } from 'react-redux'
import actions from '../../store/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './Profile.scss'

const Profile = props => {

    const user = props.userData.map(item => {
        return (
            <div className="profile__info" key={item.id}>
                <div className="profile__name">
                    <p>{item.firstName} {item.lastName}</p>
                </div>
                <div className="profile__data">
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} size="1x" />{item.city}, {item.country}</p>
                </div>
            </div>
        )
    })

    const text = props.userData.map(item => {
        return (
            <div className="profile__content" key={item.id}>
                <div className="profile__text">
                    {item.text}
                    {item.text}
                </div>
                <div className="profile__quoted-text">
                    {item.quote}
                </div>
                <div className="profile__text">
                    {item.text}
                </div>
            </div>
        )
    })

    return (
        <div className="profile__container">
            {user}
            {text}
        </div>
    )
}

const mapStateToProps = state => ({
    userData: state.photosReducer.userData
})

const mapDispatchToProps = dispatch => ({
    flickrPhotos: dispatch(actions.reset())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
