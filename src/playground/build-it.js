console.log("Build it.js");


const approot = document.getElementById('app');
let isVisible = false;

const toggleVisibility = () => {
    isVisible = !isVisible;
    render();
};

const render = () => {
    const template = (
        <div>
            <h2>Sample App for Visibility</h2>
            <button onClick={toggleVisibility}>{isVisible? 'Hide Text' : 'Show Text'}</button>
            {isVisible && <p>This is the hidden Treasure!! Congrats</p>}
        </div>
    );
    
    ReactDOM.render(template, approot);
};

render();