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
const user = {
    name: 'Cristian',
    age: 24,
    location: 'Mendoza',
};

function getLocation(location) {
    if(location){
        return <p>Location: {location}</p>;
    } 
}

function getName(name) {
    if(name){
        return <h1>{name}</h1>
    } 
}

function getAge(age) {
    if(age){
        return <p>Age: {age}</p>
    } 
}

const templateTwo = (
    <div>
        {getName(user.name ? user.name : 'Anonymous')}
        {user.age && user.age >= 18 && getAge(user.age)}
        {getLocation(user.location ? user.location : 'None')}
    </div>
); 
const appRoot = document.getElementById('app');

ReactDOM.render(
    templateTwo,
    appRoot
  );
