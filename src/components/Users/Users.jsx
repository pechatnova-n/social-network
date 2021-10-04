import React from "react";
import s from "./Users.module.css"
import Paginator from "../common/Paginator/Paginator";
import OneUser from "./OneUser";



let Users = ({currentPage, onPageChanged, pageSize, totalUsersCount, users, ...props}) => {

        return (
            <div>
                <Paginator currentPage={currentPage}
                           pageSize={pageSize}
                           onPageChanged={onPageChanged}
                           totalItemsCount={totalUsersCount} />
                <div className={s.users}>
                    {users.map(u => <OneUser user = {u}
                                             followingInProgress = {props.followingInProgress}
                                             key = {u.id}
                                             follow = {props.follow}
                                             unfollow = {props.unfollow}
                        />
                        )
                    }
                </div>
            </div>

            )



}

export default Users;