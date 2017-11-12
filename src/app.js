class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);

        this.pickOptionHandler = this.pickOptionHandler.bind(this);
        this.deleteOptionHandler = this.deleteOptionHandler.bind(this);
        this.addOptionHandler = this.addOptionHandler.bind(this);

        this.state = {
            options: []
        }
    }

    addOptionHandler(option) {

        if(!option.trim()) {
            return "please enter Task Name"
        } else if(this.state.options.indexOf(option) > -1) {
            return "Task already Exists!";
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })
    }

    pickOptionHandler() {
        const randOption = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randOption]);
    }

    deleteOptionHandler() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }


    render() {

        let title = "Indecision App";
        let subtitle = "Put Your Life in Hands of Computer !";

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action pickOption={this.pickOptionHandler} hasOptions={this.state.options.length > 0} />
                <Options options={this.state.options} deleteOptions={this.deleteOptionHandler} />
                <AddOption addOption={this.addOptionHandler} />
            </div>
        )
    }
}

class Header extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.pickOption} disabled={!this.props.hasOptions}>What Should i Do..?</button>
            </div>
        );
    }
}

class Options extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.deleteOptions}>Delete Options</button>
                <ol>
                    {
                        this.props.options.map((option) => {
                            return <Option key={option} option={option} />;
                        })
                    }
                </ol>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>{this.props.option}</li>
        );
    }
}

class AddOption extends React.Component {

    constructor(props) {
        super(props);

        this.formHandler = this.formHandler.bind(this);
        this.state = {
            errorMessage: undefined
        }
    }

    formHandler(e) {
        e.preventDefault();

        const task = e.target.elements.task.value.trim();
        
        const errorMessage = this.props.addOption(task);
        e.target.elements.task.value = "";

        this.setState(()=>{
            return { errorMessage }
        })
    }

    render() {
        return (
            <div>
                { this.state.errorMessage && <p>{this.state.errorMessage}</p> }
                <form onSubmit={this.formHandler}>
                    <input type="text" name="task" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));