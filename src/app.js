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
<<<<<<< HEAD
    count--;
    renderCounterApp();
    console.log('addOne '+count);
=======
    if (count != 0){
        count--;
        renderCounterApp();
        console.log('addOne '+count);
    }
    
>>>>>>> add counter app
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
          <button onClick={addOne} >+1</button>
<<<<<<< HEAD
          <button onClick={minusOne} >+1</button>
=======
          <button onClick={minusOne} >-1</button>
>>>>>>> add counter app
          <button onClick={reset} >reset</button>
    
        </div>
    ); 
    ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();