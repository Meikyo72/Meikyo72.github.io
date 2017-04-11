        class App extends React.Component {
        constructor(props) {
            super(props); 
            this.state = {
                mytext: ''
            }
            this.myKeyUp = this.myKeyUp.bind(this);
        }
        myKeyUp(event) {
            this.setState({
                mytext: event.target.value
            })
        }
        render() {
            return (
            <div className = "field">
                <TheField handleKeyUp={this.myKeyUp} msg={this.state.mytext} />
                </div>
            );
        }
    }
    function TheField(props) {
        return <div>
            <input type="text" onKeyUp={props.handleKeyUp} /> <br/>
                <span>{props.msg}</span>
                </div>
    }
    ReactDOM.render(
        <App></App>,
        document.getElementById('modul1')
    )
    
    class App2 extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                num1: Number ,
                num2: Number ,
                result: Number 
            };
            this.theKeyUp = this.theKeyUp.bind(this);
            this.theKeyUp2 = this.theKeyUp2.bind(this);
            this.handleClick = this.handleClick.bind(this);
        }
        theKeyUp(event) {
            this.setState({
                num1: event.target.value,
            });
        }
        theKeyUp2(event) {
            this.setState({
                num2: event.target.value,
            })
        }
        handleClick(event) {
            this.setState({
                result: parseInt(this.state.num1)+parseInt(this.state.num2)
            })
        }
        render() {
             return ( <div>
                <SumIt handleKey={this.theKeyUp} num1={this.state.num1} />
                <SumIt handleKey={this.theKeyUp2} num2={this.state.num2} />
                <button onClick={this.handleClick}>Addera</button>
                <p>Summan är: {this.state.result}</p>
            </div>
               );
        }
    }
    function SumIt(props) {
        return <div>
            <input type="number" onKeyUp={props.handleKey} /> <br/>
                </div>
    }
    ReactDOM.render(
        <App2></App2>,
        document.getElementById('modul2')
    )
    
    class App3 extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                button1: true,
                button2: false,
                statusText: true,
                myStyle: true
            };
            this.handleClick = this.handleClick.bind(this);
        }
        handleClick() {
            this.setState(prevState => ({
                button1: !prevState.button1,
                button2: !prevState.button2,
                statusText: !prevState.statusText,
                myStyle: !prevState.myStyle
            }));
        }
        render(){
            return (
            <div>
            <button type="button" onClick={this.handleClick} className={this.state.myStyle ? 'active' : 'inactive'}>
                {this.state.button1 ? 'ON' : 'OFF'}
                </button>
            <button type="button" onClick={this.handleClick} className={this.state.myStyle ? 'inactive' : 'active'}>
                {this.state.button2 ? 'ON' : 'OFF'}
                </button>
            <p>{this.state.statusText ? 'Knapp 1 är aktiv' : 'Knapp 2 är aktiv'}</p>
                </div>
            );
        }
    }
ReactDOM.render(
    <App3 />,
    document.getElementById('modul3')
)

