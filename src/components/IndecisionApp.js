import React from "react";
/**
 * Custom Components
 */
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
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
        this.setState(() => ({
            selectedOption: this.state.options[randOption]
        }))
    }

    clearSelectedOptionHandler = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
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
                <div className="container">
                    <Action pickOption={this.pickOptionHandler} hasOptions={this.state.options.length > 0} />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            deleteOptions={this.deleteOptionsHandler}
                            deleteOption={this.deleteOptionHandler}
                        />
                        <AddOption addOption={this.addOptionHandler} />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    clearSelectedOptionHandler={this.clearSelectedOptionHandler}
                />
            </div>
        )
    }
}

export default IndecisionApp;