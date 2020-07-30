import s from './Friends.module.css';
import userPhoto from '../../../Redux/123.png';
import React from 'react';
import {NavLink} from 'react-router-dom';
import {followAPI} from "../../../API/API";

const Friends = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.friends}>
            <div>
                {pages.map(p => {
                    return <span className={`${props.currentPage === p && s.selectedPage} ${s.pagesNumbers}`}
                                 onClick={(event) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {props.friendsData.map(f =>
                <div className={s.friend} key={f.id}>
                <span>
                    <div>
                        <NavLink to={'/main/' + f.id}>
                            <img alt="" src={f.photos.small != null ? f.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {f.name}
                    </div>
                    <div>
                        {f.followed
                            ? <button onClick={() => {
                                followAPI.unfollow(f.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(f.id)
                                        }
                                    });
                            }}>Удалить из друзей</button>
                            : <button onClick={() => {
                                followAPI.follow(f.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(f.id)
                                        }
                                    });
                            }}>Добавить в друзья</button>}
                    </div>
                </span>
                </div>)}
        </div>
    )
};

export default Friends;