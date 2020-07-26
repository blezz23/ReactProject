import React from 'react';
import s from "./Friends.module.css"
import * as axios from "axios";
import userPhoto from "../../../Redux/123.png"

class Friends extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFriends(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFriends(response.data.items)
            });
    };

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div className={s.friends}>
            <div>
                {pages.map(p => {
                    return <span className={`${this.props.currentPage === p && s.selectedPage} ${s.pagesNumbers}`}
                                 onClick={(event) => {this.onPageChanged(p)}}>{p}</span>
                })}
            </div>
            {
                this.props.friendsData.map(f => <div className={s.friend} key={f.id}>
                <span>
                    <div>
                        <img alt="" src={f.photos.small != null ? f.photos.small : userPhoto}/>
                    </div>
                    <div>
                        {f.name}
                    </div>
                    <div>
                        {f.followed
                            ? <button onClick={() => {
                                this.props.unfollow(f.id)
                            }}>Удалить из друзей</button>
                            : <button onClick={() => {
                                this.props.follow(f.id)
                            }}>Добавить в друзья</button>}
                    </div>
                </span>
                </div>)
            }
        </div>
    }
}

export default Friends;