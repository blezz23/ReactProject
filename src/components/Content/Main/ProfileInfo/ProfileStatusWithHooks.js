import s from "./ProfileInfo.module.css";
import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status]);

    const activateMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };

    return (
        <div className={s.about}>
            { !editMode &&
            <div>
                <span onDoubleClick={activateMode}>{props.status || "-----"}</span>
            </div>
            }
            { editMode &&
            <div>
                <input
                    value={status}
                    onChange={onStatusChange}
                    onBlur={deactivateEditMode}
                    autoFocus={true} />
            </div>
            }
        </div>
    )
};

export default ProfileStatusWithHooks;