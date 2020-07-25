import React from 'react';
import s from "./Friends.module.css"

const Friends = (props) => {
    if (props.friendsData.length === 0) {
        props.setFriends([
            {
                id: 1, name: "Nikita", followed: true,
                avatar: "https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"
            },
            {
                id: 2, name: "Maxim", followed: true,
                avatar: "https://pm1.narvii.com/7388/55ffd10f441052afd8858b4a53216ae0a64883e3r1-2048-2048v2_hq.jpg"
            },
            {
                id: 3, name: "Kostya", followed: true,
                avatar: "https://www.meme-arsenal.com/memes/549e8c6d71ae27a2ebd13a7580d71d80.jpg"
            }
        ])
    }

    return <div className={s.friends}>
        {
            props.friendsData.map(f => <div key={f.id}>
                <span>
                    <div>
                        <img alt="" src={f.avatar}/>
                    </div>
                    <div>
                        {f.name}
                    </div>
                    <div>
                        {f.followed
                            ? <button onClick={() => {
                                props.unfollow(f.id)
                            }}>Удалить из друзей</button>
                            : <button onClick={() => {
                                props.follow(f.id)
                            }}>Добавить в друзья</button>}
                    </div>
                </span>
            </div>)
        }
    </div>
};

export default Friends;