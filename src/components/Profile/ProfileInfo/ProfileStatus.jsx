import React from "react";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
        this.props.updateStatus(this.state.status);

    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode &&
                        <div>
                            <span onClick={this.activateEditMode}>{this.props.status || "No status"}</span>
                        </div>
                }
                {
                    this.state.editMode &&
                        <div>
                            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                                   value={this.state.status} type="text" />
                        </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;