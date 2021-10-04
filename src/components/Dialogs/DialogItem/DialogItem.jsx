import React from "react";
import {NavLink} from "react-router-dom";
import s from "./../Dialogs.module.css";



const DialogItem = (props) =>{
    let path = "/dialogs/" + props.id;

    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>
                <img
                    src="https://yt3.ggpht.com/a/AATXAJyn3Oj1n90vIOfDkoeuuqGKaYKqRPaW17VDkQ=s900-c-k-c0xffffffff-no-rj-mo" alt="ava"/>
                <span>{props.name}</span>
            </NavLink>
        </div>
    )
}

export default DialogItem;