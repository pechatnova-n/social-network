import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const maxLength20 = maxLengthCreator(20);

const AddNewPostForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPostText"}
                       placeholder={"Введите текст поста"} validate={ [required, maxLength20] } />
            </div>
            <div>
                <button>Добавить пост</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm);


const MyPosts = React.memo(props => {
    let postElement =
        [...props.posts]
            .reverse()
            .map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }
    return (
        <div className={s.postsBlock}>
            <h3>Мои посты</h3>
            <AddNewPostReduxForm onSubmit={onAddPost}/>

            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
});


export default MyPosts;