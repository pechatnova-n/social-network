import React from "react";
import style from "./ProfileInfo.module.css";
import styleForm from "../../common/FormsControls/FormsControls.module.css";
import {createNewField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <div className={styleForm.formSummaryError}>{error}</div>}
            <div><span className={style.hat}>Фамилия</span>{createNewField("Full name", "fullName", [], Input)}</div>

            <div><span className={style.hat}>Ищу работу</span>
                {createNewField("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>
            <div><span className={style.hat}>Мои профессиональные навыки</span>
                {createNewField("Мои профессиональные навыки", "lookingForAJobDescription", [], Textarea)}
            </div>
            <div><span className={style.hat}>Обо мне</span>
                {createNewField("Обо мне", "aboutMe", [], Textarea)}
            </div>

            <div><span className={style.hat}>Контакты</span>{Object.keys(profile.contacts).map(key =>
            { return <div key={key} className={style.contact}>
                <span className={style.hat}>{key} : {createNewField(key, "contacts." + key, [], Input)}</span>
            </div>
                /*<Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />*/
            }) }</div>
            <div><button>Сохранить</button></div>
        </form>
    )
}


const ProfileDataReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileDataReduxForm;