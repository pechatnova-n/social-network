import React from "react";
import s from "./../Dialogs.module.css";


const Message = (props) => {
    return(
        <div className={s.dialog}>
            <img src="https://yt3.ggpht.com/a/AATXAJyn3Oj1n90vIOfDkoeuuqGKaYKqRPaW17VDkQ=s900-c-k-c0xffffffff-no-rj-mo" alt="ava"/>
            {props.message}
        </div>
    )
}





export default Message;