class IndecisionApp extends React.Component {
    render() {
        
        let title="Indecision App";
        let subtitle="Put Your Life in Hands of Computer !";
        const options = ['A','B','C'];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options />
                <AddOption />
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
                <button>What Should i Do..?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <ol>
                <Option />
                <Option />
            </ol>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>This is an Option.</li>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <button>Add Option</button>
        );
    }
}


ReactDOM.render( <IndecisionApp /> , document.getElementById('app'));