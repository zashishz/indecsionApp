class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);

        this.pickOptionHandler = this.pickOptionHandler.bind(this);
        this.deleteOptionHandler = this.deleteOptionHandler.bind(this);
        this.deleteOptionsHandler = this.deleteOptionsHandler.bind(this);
        this.addOptionHandler = this.addOptionHandler.bind(this);

        this.state = {
            options: props.options
        }
    }

    addOptionHandler(option) {

        if(!option.trim()) {
            return "please enter Task Name"
        } else if(this.state.options.indexOf(option) > -1) {
            return "Task already Exists!";
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    pickOptionHandler() {
        const randOption = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randOption]);
    }

    deleteOptionHandler(optionToRemove) {
        this.setState((prevState) => ({ 
            options: prevState.options.filter((option) => option !== optionToRemove)
        }));
    }

    deleteOptionsHandler() {
        this.setState(() => ({ options: [] }));
    }

    componentDidMount() {
        try {
            let options = JSON.parse(localStorage.getItem("options"));
            if(options) this.setState(()=> ({  options }));
        } catch(e) {

        }
        console.log("componentDidMount");
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            localStorage.setItem("options",JSON.stringify(this.state.options));
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

IndecisionApp.defaultProps = {
    options : []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            { props.subtitle && <h2>{props.subtitle}</h2> }
        </div>
    );
}

Header.defaultProps = {
    title: "Indecision App"
}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.pickOption} disabled={!props.hasOptions}>What Should i Do..?</button>
        </div>
    );
}

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

const Option = (props) => {
    return (
        <li>
            {props.option}
            <button onClick={()=>{
                props.deleteOption(props.option);
            }}>
            remove
            </button>
        </li>
    );
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
        
        if(!errorMessage) e.target.elements.task.value = "";

        this.setState(()=>({ errorMessage }))
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