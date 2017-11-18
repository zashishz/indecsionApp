import React from 'react';

const Option = (props) => {
    return (
        <li>
            {props.option}
            <button onClick={() => {
                props.deleteOption(props.option);
            }}>
                remove
                </button>
        </li>
    );
}

export default Option;