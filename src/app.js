class IndesicionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }
    handleDeleteAllOptions() {
        this.setState(()=>{
            return {
            options: []
            }
        });
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option){
        if (this.state.options.indexOf(option) > -1){
            return 'This option already exists'
        } else if (option) {
            this.setState((prevState)=>{
                return {
                options: prevState.options.concat(option)
                }
            });
        } else {
            return 'Enter valid value to add item'
        }
    }
    render() {
        const title = 'Indesicion';
        const subtitle = 'Put your life in the hands of the app';
        const action_btn_lbl = 'What should I do?'
        
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                hasOptions={this.state.options.length > 0} 
                label={action_btn_lbl} 
                handlePick={this.handlePick}
                />
                <Options 
                options={this.state.options}
                handleDeleteAllOptions={this.handleDeleteAllOptions}
                />
                <AddOption
                handleAddOption={this.handleAddOption}
                />
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
    render() {
        return (
            <div>
                <button 
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
                >
                    {this.props.label}
                </button>
            </div>
        );
    }
}
class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteAllOptions}>Remove All</button>
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
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(()=>{
            return {
                error
            }
        });
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndesicionApp/>, document.getElementById('app'))