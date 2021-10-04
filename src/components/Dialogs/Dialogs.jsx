import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";




const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} />)
    let messageElement = props.messages.map(message => <Message message={message.message} key={message.id} /> )

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                { dialogsElements }
            </div>

            <div className={s.messages}>
                { messageElement }
                <div className={s.sendMessage}>
                    <AddMessageReduxForm onSubmit={addNewMessage} />
                </div>
            </div>

        </div>
    )
}

const maxLength50 =  maxLengthCreator(50);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={ [required, maxLength50] } name={"newMessageBody"}
                       placeholder={"Введите сообщение"} />
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;