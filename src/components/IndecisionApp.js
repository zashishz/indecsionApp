import React from "react";
/**
 * Custom Components
 */
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

class IndecisionApp extends React.Component {

    state = {
        options: []
    }
    
    addOptionHandler = (option) => {

        if (!option.trim()) {
            return "please enter Task Name"
        } else if (this.state.options.indexOf(option) > -1) {
            return "Task already Exists!";
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    pickOptionHandler = () => {
        const randOption = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randOption]);
    }

    deleteOptionHandler = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }));
    }

    deleteOptionsHandler = () => {
        this.setState(() => ({ options: [] }));
    }

    componentDidMount() {
        try {
            let options = JSON.parse(localStorage.getItem("options"));
            if (options) this.setState(() => ({ options }));
        } catch (e) {

        }
        console.log("componentDidMount");
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            localStorage.setItem("options", JSON.stringify(this.state.options));
        }
        console.log("componentDidUpdate");
    }


    render() {

        let subtitle = "Put Your Life in Hands of Computer !";

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action pickOption={this.pickOptionHandler} hasOptions={this.state.options.length > 0} />
                <Options
                    options={this.state.options}
                    deleteOptions={this.deleteOptionsHandler}
                    deleteOption={this.deleteOptionHandler}
                />
                <AddOption addOption={this.addOptionHandler} />
            </div>
        )
    }
}

export default IndecisionApp;