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

