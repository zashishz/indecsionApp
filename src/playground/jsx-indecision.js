console.log("Loaded App.js");

const app = {
    title: "Indecision App!",
    subtitle: 'Let your Computer Make a decision!',
    options: ['One', 'Two']
}

const approot = document.getElementById('app');

const onFormSubmit = (e) => {
    e.preventDefault();
    let option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        reRender();
    }
};

const resetOptions = () => {
    app.options = [];
    reRender();
};

const chooseRandomOpt = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    alert("Selected Option :" + app.options[randomNum]);
};

const reRender = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options.length > 0) ? 'You Have Options': 'No Options'}</p>
            <button disabled={app.options.length === 0} onClick={chooseRandomOpt}>What Should I Do..?</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
            <button onClick={resetOptions}>Remove All</button>
            <ol>
                { 
                    app.options.map((opt) => <li key={opt}>{opt}</li> ) 
                }
            </ol>
        </div>
    );
    
    ReactDOM.render(template,approot);
};

reRender();