'use strict';

console.log('App.js is running');

//create app object title/subtitle

var app = {
    title: 'Indesicion App',
    subtitle: 'This is some info',
    options: [],
    printOptions: function printOptions() {
        return this.options.map(function (option) {
            return React.createElement(
                'li',
                { key: option },
                option,
                ' ',
                React.createElement(
                    'button',
                    null,
                    'Remove option'
                )
            );
        });
    }
};
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
        console.log(app.options);
    }
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

var onRemoveAll = function onRemoveAll() {
    if (app.options) {
        app.options = [];
        render();
        console.log(app.options);
    }
};

var appRoot = document.getElementById('app');

var render = function render() {
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
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.printOptions()
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
