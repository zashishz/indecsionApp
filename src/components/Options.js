import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            {props.options.length == 0 && <p>Please Add an  Option</p>}
            <button onClick={props.deleteOptions}>Delete Options</button>
            <ol>
                {
                    props.options.map((option) => {
                        return <Option
                            key={option}
                            option={option}
                            deleteOption={props.deleteOption}
                        />;
                    })
                }
            </ol>
        </div>
    );
}

export default Options;