import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../accets/imges/userPhoto.jpg";
import {NavLink} from "react-router-dom";



let OneUser = ({user, followingInProgress, unfollow, follow}) => {

        return (
            <div className={s.userItem} key={user.id}>
                <div className={s.itemAvatar}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small ? user.photos.small : userPhoto} alt="userPhoto"/>
                    </NavLink>
                </div>
                <div className={s.userData}>
                    <div className={s.userName}>{user.name}</div>
                    {/*<div className={s.userStatus}>{user.status}</div>*/}
                </div>
                <div className={s.subscribeBlock}>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id);
                    }}>Отписаться</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id);
                    }}>Подписаться</button>}
            </div>
            </div>



               /* <div>
                <div className={s.userPhoto}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small ? user.photos.small : userPhoto} alt="userPhoto"/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id);
                        }}>Отписаться</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id);
                        }}>Подписаться</button>}
                </div>
                <div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
            </div>*/

        )
}

export default OneUser;