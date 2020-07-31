import s from "./ProfileInfo.module.css";
import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        newStatusBody: this.props.newStatusText
    };

    onStatusChange(e) {
        let body = e.target.value;
        this.props.statusChange(body);
        this.setState({
            newStatusBody: body
        })
    };

    activateEditMode() {
        this.setState({
            editMode: true
        })
    };
    deactivateEditMode() {
        this.setState({
            editMode: false
        });
        this.props.addStatus();
    };

    render() {
        return (
            <div className={s.about}>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.myStatus}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            value={this.state.newStatusBody}
                            onChange={this.onStatusChange.bind(this)}
                            autoFocus={true}
                            onBlur={this.deactivateEditMode.bind(this)}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;