import React from 'react';

export default class AddOption extends React.Component {

    state = {
        errorMessage: undefined
    }

    formHandler = (e) => {
        e.preventDefault();

        const task = e.target.elements.task.value.trim();

        const errorMessage = this.props.addOption(task);

        if (!errorMessage) e.target.elements.task.value = "";

        this.setState(() => ({ errorMessage }))
    }

    render() {
        return (
            <div>
                {this.state.errorMessage && <p className="add-option-error">{this.state.errorMessage}</p>}
                <form className="add-option" onSubmit={this.formHandler}>
                    <input className="add-option_input" type="text" name="task" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}