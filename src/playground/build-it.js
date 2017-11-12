console.log("Build it.js");

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }

    handleToggleVisibility() {
        this.setState((prevState)=>{
            return {
                isVisible: !prevState.isVisible
            }
        })
    }

    render() {
        return (
            <div>
                <h2>Sample App for Visibility</h2>
                <button onClick= { this.handleToggleVisibility }>{ this.state.isVisible ? 'Hide Text' : 'Show Text' }</button>
                { this.state.isVisible && <p>This is the hidden Treasure!! Congrats</p> }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));