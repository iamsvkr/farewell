import React from 'react';
import profile from '../../images/profile.png';
import './styles.scss';

const Profile = () => {
    return (
        <div className = "Profile">
            <div className = "image">
                <img src = {profile} />
            </div>
            <div className ="description">
                Black pearl won't be same without you!!
            </div>
        </div>
    )
}

export default Profile;