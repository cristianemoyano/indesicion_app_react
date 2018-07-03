class IndesicionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        }
    }
    handleDeleteAllOptions() {
        this.setState(()=>{
            return {
            options: []
            }
        });
    }
    handleDeleteOption(optionToRemove) {
       this.setState((prevState)=>({
           options: prevState.options.filter((option)=>{
               return optionToRemove !== option;
           })
       }))
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

        const action_btn_lbl = 'What should I do?'
        
        return (
            <div>
                <Header />
                <Action 
                hasOptions={this.state.options.length > 0} 
                label={action_btn_lbl} 
                handlePick={this.handlePick}
                />
                <Options 
                options={this.state.options}
                handleDeleteAllOptions={this.handleDeleteAllOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}
IndesicionApp.defaultProps = {
    options: []
}
const Header = function (props) {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <p>{props.subtitle}</p>}
        </div>
    );
}
Header.defaultProps = {
    title: 'Indesicion App',
    subtitle: 'Put your life in the hands of APP'
}
const Action = function (props) {
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
                {props.label}
            </button>
        </div>
    );
}
const Options = function (props) {
    return (
        <div>
            <button onClick={props.handleDeleteAllOptions}>Remove All</button>
            {
                props.options.map((option)=>(
                    <Option key={option} optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
}

const Option = function (props){
    return (
        <div>
            {props.optionText}
            <button
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
            >
            remove
            </button>
        </div>
    );
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

ReactDOM.render(<IndesicionApp />, document.getElementById('app'))