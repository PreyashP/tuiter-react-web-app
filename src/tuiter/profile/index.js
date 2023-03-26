import React from 'react';
import {useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import './index.css'
function ProfileComponent() {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate('/tuiter/edit-profile');
    };

    const handleBack = () => {
        navigate('/tuiter/home');
    };
    const profile = useSelector(state => state.profile)
    return (
        <div>
            <div>
                <button onClick={handleBack} className="float-left btn"><i className="float-left fa fa-arrow-left" ></i></button>
                <span className="wd-mg-left-15px wd-mg-top-0 wd-font-size-22px"><b>{profile.firstName} {profile.lastName}</b></span>
            </div>
            <div className=" image-container">
                <img className="wd-profile-banner-image" src={`/images/${profile.bannerPicture}`} alt="Profile" />
                <img className="wd-profile-page-image" src={`/images/${profile.profilePicture}`} alt="Profile" />
                <button onClick={handleEdit} className="btn btn-light border-primary rounded-pill float-end"><b>Edit Profile</b></button>
            </div>

            <div className="wd-mg-top-100">
                <h3><b>{profile.firstName} {profile.lastName}</b></h3>
                <p>{profile.handle}</p>
                <p>{profile.bio}</p>
                <a href={profile.website}>{profile.website}</a>
                <div>
                    <div>
                        <i className="bi-geo-alt"></i> {profile.location}
                        <i className="wd-mg-left-15px bi-balloon"></i> Born {profile.dateOfBirth}
                        <i className="wd-mg-left-15px bi-calendar3"></i> {profile.dateJoined}
                    </div>
                    <br/>
                    <div>
                        <b>{profile.followingCount}</b> Following
                        <b className="wd-mg-left-15px">{profile.followersCount}</b> Followers

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileComponent;
