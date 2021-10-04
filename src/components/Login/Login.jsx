import React from "react";
import {Redirect} from "react-router-dom";
import {reduxForm} from "redux-form";
import {createNewField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import style from "../common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
                {createNewField("Email", "email", [required], Input)}
                {createNewField("Password", "password", [required], Input, {type: "password"})}
                {createNewField(null, "rememberMe", [], Input, {type: "checkbox"}, "Запомнить меня")}

            { captchaUrl && <img src={captchaUrl} alt="captchaImg"/> }
            { captchaUrl && createNewField("Symbols from image", "captcha", [required], Input, {} )}

            { error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Войти</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return <div>
            <h1>Авторизация</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login} )(Login);