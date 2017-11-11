let counter = 0;

const increment = () => {
    ++counter;
    renderMe();
    return counter;
}

const decrement = () => {
    console.log(--counter);
    return counter;
}

const reset = () => {
    console.log("Reset");
    counter = 0;
    return counter;
}


var approot = document.getElementById('app');

const renderMe = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options.length > 0) ? 'You Have Options': 'No Options'}</p>
            <h3>Count: {counter}</h3>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>0</button>
        </div>
    );

    ReactDOM.render(template,approot);
};

renderMe();