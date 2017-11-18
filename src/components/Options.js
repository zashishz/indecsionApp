import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button
                    className="button button--link"
                    onClick={props.deleteOptions}
                >Delete Options</button>
            </div>
            {props.options.length == 0 && <p className="widget__message">Please Add an Option to get Started</p>}
            {
                props.options.map((option, index) => {
                    return <Option
                        key={option}
                        option={option}
                        count={index + 1}
                        deleteOption={props.deleteOption}
                    />;
                })
            }
        </div>
    );
}

export default Options;