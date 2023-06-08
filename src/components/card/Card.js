import React from "react";
import User from "./User";
import Text from "../utils/Text";

const Card = (props) => {
    return (
        <div className="card">
            <User user={ props.author }/>
            <Text text={props.text}/>
            <Text>
                <span className="date">{ props.date }</span>
            </Text>
        </div>
    );
};

export default Card;