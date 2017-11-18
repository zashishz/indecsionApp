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
                {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
                <form onSubmit={this.formHandler}>
                    <input type="text" name="task" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}