console.log('App.js is running')

//create app object title/subtitle

const app = {
    title: 'Indesicion App',
    subtitle: 'This is some info'
};

// JSX - JavaScript XML
const template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
); 
let count = 0;

const addOne = (num) => {
    count++;
    renderCounterApp();
    console.log('addOne '+count);
}
const minusOne = (num) => {
    if (count != 0){
        count--;
        renderCounterApp();
        console.log('addOne '+count);
    }
    
}
const reset = (num) => {
    count = 0;
    renderCounterApp();
    console.log('addOne '+count);
}


const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
          <h1>Count: {count}</h1>
          <button onClick={minusOne} >+1</button>
          <button onClick={minusOne} >-1</button>
          <button onClick={reset} >reset</button>
    
        </div>
    ); 
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();

