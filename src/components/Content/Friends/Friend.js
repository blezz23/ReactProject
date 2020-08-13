import styles from "./Friends.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../Redux/123.png";
import React from "react";

const Friend = ({friend, followingProgressArray, follow, unfollow}) => {
    return (
        <div className={styles.friends}>
            <div className={styles.friend} key={friend.id}>
                <span>
                    <div>
                        <NavLink to={'/main/' + friend.id}>
                            <img alt="" src={friend.photos.small != null ? friend.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {friend.name}
                    </div>
                    <div>
                        {friend.followed
                            ? <button disabled={followingProgressArray.some(id => id === friend.id)} onClick={() => {
                                unfollow(friend.id)
                            }}>Удалить из друзей</button>
                            : <button disabled={followingProgressArray.some(id => id === friend.id)} onClick={() => {
                                follow(friend.id)
                            }}>Добавить в друзья</button>}
                    </div>
                </span>
            </div>
        </div>
    )
};

export default Friend;