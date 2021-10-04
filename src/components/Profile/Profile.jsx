import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
    <div>
        <ProfileInfo profile={props.profile}
                     status={props.status}
                     savePhoto={props.savePhoto}
                     updateStatus={props.updateStatus}
                     saveProfile={props.saveProfile}
                     isOwner={props.isOwner} />
        <MyPostsContainer />
    </div>
    )
}

export default Profile;