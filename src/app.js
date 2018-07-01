console.log('App.js is running')

//create app object title/subtitle

const app = {
    title: 'Indesicion App',
    subtitle: 'This is some info',
    options:[],
    printOptions() {
        return this.options.map((option)=> {
            return <li key={option}>{option} <button>Remove option</button></li>
        });
    },
};
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
        console.log(app.options);
    }
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const onRemoveAll = () => {
    if (app.options){
        app.options = [];
        render();
        console.log(app.options);
    }
}

const appRoot = document.getElementById('app');


const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <p>{app.options.length > 0 ? 'Here are your options': 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button> 
            <ol>
                {app.printOptions()}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    ); 
    ReactDOM.render(template, appRoot)
};

render();