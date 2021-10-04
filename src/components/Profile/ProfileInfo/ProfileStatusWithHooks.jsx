import React, {useEffect, useState} from "react";
import style from "./ProfileInfo.module.css";


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
        }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }


            return (
            <div className={style.status}>
                Статус: { !editMode &&
                     <div className={style.currentStatus}>
                            <span onDoubleClick={activateEditMode}>{props.status || "Пока нет статуса"}</span>
                        </div>
                }
                {
                    editMode &&
                        <div className={style.editStatus}>
                            <input type="text"
                                onChange={onStatusChange}
                                   autoFocus={true}
                                   onBlur={deactivateEditMode}
                                   value={status}
                            />
                        </div>
                }
            </div>
        )
    }


export default ProfileStatusWithHooks;