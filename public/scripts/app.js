'use strict';

console.log('App.js is running');

//create app object title/subtitle

var app = {
    title: 'Indesicion App',
    subtitle: 'This is some info'
};

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);
var count = 0;
var addOne = function addOne(num) {
    count++;
    renderCounterApp();
    console.log('addOne ' + count);
};
var minusOne = function minusOne(num) {
    count--;
    renderCounterApp();
    console.log('addOne ' + count);
};
var reset = function reset(num) {
    count = 0;
    renderCounterApp();
    console.log('addOne ' + count);
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
