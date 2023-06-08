import React from 'react';

const Text = (props) => {
    return (
        <p className="text">{ props.text || props.children }</p>
    )
}

export default Text;