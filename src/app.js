class IndesicionApp extends React.Component {
    render() {
        const title = 'Indesicion';
        const subtitle = 'Put your life in the hands of the app';
        const action_btn_lbl = 'What should I do?'
        const options = ['Thing one', 'Thing two', 'Thing three'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action label={action_btn_lbl} />
                <Options options={options}/>
                <AddOption/>
            </div>
        );
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick(){
        alert('js');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>{this.props.label}</button>
            </div>
        );
    }
}
class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        this.props.options = []
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option)=><Option key={option} optionText={option}/>)
                }
            </div>
        );
    }
}
class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}



class AddOption extends React.Component {
    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        if (option){
            alert(option);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndesicionApp/>, document.getElementById('app'))