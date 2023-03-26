import {useSelector} from "react-redux";
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {editProfile} from "../reducers/profile-reducer";
import {useNavigate} from "react-router-dom";
import '../profile/index.css'

const EditProfile = () => {
    const profile = useSelector(state => state.profile)

    const navigate = useNavigate();

    const handleExit = () => {
        navigate('/tuiter/profile');
    };


    const [formData, setFormData] = useState(profile);

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(editProfile(formData));
        navigate('/tuiter/profile');
    };
    return (
        <div>
            <div>
                {/*Back/Cancel Button*/}
                <button onClick={handleExit} className="float-left btn"><i className="bi-x-lg"></i>
                </button>
                <span className="wd-mg-left-15px wd-mg-top-0 wd-font-size-22px ps-2"><b>Edit Profile</b></span>
                {/*Save Button*/}
                <button onClick={handleSubmit} className="float-right btn btn-dark  rounded-pill float-end"><b>Save</b>
                </button>

            </div>
            <div className=" image-container">
                <img className="wd-profile-banner-image pt-2" src={`/images/${profile.bannerPicture}`} alt="Profile"/>
                <img className="wd-profile-page-image" src={`/images/${profile.profilePicture}`} alt="Profile"/>
            </div>

            <div className="form-group wd-mg-top-100 wd-width-full">

                {/*First Name*/}
                <label htmlFor="firstName">First Name:</label>
                <input className="wd-width-full" type="text" value={formData.firstName}
                       onChange={(e) => setFormData({...formData, firstName: e.target.value})} id="firstName"/>
                <br/><br/>

                {/*Last Name*/}
                <label htmlFor="lastName">Last Name:</label>
                <input className="wd-width-full" type="text" value={formData.lastName}
                       onChange={(e) => setFormData({...formData, lastName: e.target.value})} id="lastName"/>
                <br/><br/>

                {/*Bio*/}
                <label htmlFor="bio">Bio:</label>
                <textarea className="wd-width-full" value={formData.bio}
                          onChange={(e) => setFormData({...formData, bio: e.target.value})} id="bio"
                          name="bio"></textarea>
                <br/><br/>

                {/*Location*/}
                <label htmlFor="location">Location:</label>
                <input className="wd-width-full" type="text"
                       onChange={(e) => setFormData({...formData, location: e.target.value})} id="location"
                       value={formData.location} name="location"/>
                <br/><br/>

                {/*Website*/}
                <label htmlFor="website">Website:</label>
                <input className="wd-width-full" type="url"
                       onChange={(e) => setFormData({...formData, website: e.target.value})} value={formData.website}
                       id="website" name="website"/>
                <br/><br/>

                {/*Date of Birth*/}
                <label htmlFor="dateOfBirth">Date of Birth:</label>
                <input className="wd-width-full" type="date"
                       onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                       value={formData.dateOfBirth} id="dateOfBirth" name="dateOfBirth"/>
                <br/><br/>
            </div>
        </div>


    );
}

export default EditProfile;
