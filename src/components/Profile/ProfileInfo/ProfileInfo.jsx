import React, {useState} from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../accets/imges/userPhoto.jpg";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);



    if(!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
         saveProfile(formData).then(
             () => {
                 setEditMode(false);
             }
         )
    }


    return (
        <div>
            <div className={s.topProfile}></div>
            <div className={s.photoBlock}>
                <img className={s.photoUser} src={profile.photos.large ? profile.photos.large : userPhoto} alt="userPhoto"/>
                {isOwner && <input className={s.loadPhoto} type={"file"} onChange={onMainPhotoSelected} /> }

                <ProfileStatusWithHooks status = {status} updateStatus={updateStatus} />
            </div>

            <div className={s.descriptionBlock}>
                { editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={ () => {setEditMode(true)}} /> }
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div className={s.profileData}>
            <div><span className={s.hat}>Фамилия: </span> {profile.fullName}</div>
            <div><span className={s.hat}>Ищу работу: </span> {profile.lookingForAJob ? "Да" : "Нет"}</div>
            {profile.lookingForAJob && <div><span className={s.hat}>Мои навыки: </span> {profile.lookingForAJobDescription}</div>}
            <div><span className={s.hat}>Обо мне: </span> {profile.aboutMe}</div>
            <div className={s.contacts}><span className={s.hat}>Контакты: </span>{Object.keys(profile.contacts).map(key =>
            { return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            }) }</div>
            {isOwner && <div><button onClick={goToEditMode}>Редакторовать</button></div>}
        </div>
    )
}



const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={s.socialData}>
            <span className={s.socialDataTitle}>{contactTitle + ":"}</span>
            {contactValue}
        </div>
    )
}


export default ProfileInfo;