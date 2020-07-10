import React from 'react';
import s from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                    Nikita
                </div>
                <div className={s.dialog}>
                    Maxim
                </div>
                <div className={s.dialog}>
                    Konstantin
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Lol</div>
                <div className={s.message}>Gif</div>
            </div>
        </div>
    );
};

export default Dialogs;