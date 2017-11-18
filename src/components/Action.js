import React from 'react';

const Action = (props) => (
    <div>
        <button 
            className="big-button"
            onClick={props.pickOption} 
            disabled={!props.hasOptions}
        >What Should i Do?</button>
    </div>
)

export default Action;