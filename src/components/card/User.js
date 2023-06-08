import React from "react";

const User = (props) => {
    return (
        <div className="user">
            <img className="avatar-img" src={props.user.avatarUrl} alt={props.user.name} />
            <p className="username">{props.user.name}</p>
        </div>
    );
};

export default User;