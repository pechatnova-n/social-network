import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = (props) => {
    return(
        <nav className={s.nav}>
            <div className="menu">
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.active}>Профиль</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/dialogs" activeClassName={s.active}>Сообщения</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/users" activeClassName={s.active}>Пользователи</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.active}>Новости</NavLink>
                </div>
            </div>

            <div className="friends">
                <div className="title">Друзья</div>

                <div className="blockFriends">
                    <NavLink to={'/user/'}>
                        <img src="https://yt3.ggpht.com/a/AATXAJyn3Oj1n90vIOfDkoeuuqGKaYKqRPaW17VDkQ=s900-c-k-c0xffffffff-no-rj-mo" alt="userPhoto"/>
                        <span>Masha</span>
                    </NavLink>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;