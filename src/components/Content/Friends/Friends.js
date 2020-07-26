import React from 'react';
import s from "./Friends.module.css"
import * as axios from "axios";
import userPhoto from "../../../Redux/123.png"

class Friends extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setFriends(response.data.items)
            });
    }

    render() {
        return <div className={s.friends}>
            {
                this.props.friendsData.map(f => <div key={f.id}>
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