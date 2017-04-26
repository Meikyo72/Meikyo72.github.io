
const cols=[
    { key:'förnamn', label:'Firstname' },
    { key:'efternamn', label:'Lastname'}
];
 const heroes = [
     { firstName: 'Peter', lastName: 'Parker' },
     { firstName: 'Clark', lastName: 'Kent' },
     { firstName: 'Reed', lastName: 'Richards' },
     { firstName: 'Bruce', lastName: 'Wayne' },
     { firstName: 'Wade', lastName: 'Wilson' },
     { firstName: 'Petri', lastName: 'Jahnsson' },
     { firstName: 'Bruce', lastName: 'Banner' }
 ];
class App extends React.Component {
        constructor (props) {
            super(props);
            this.state = {
                list: heroes,
                firstName: '',
                lastName: '',
                hero1:''
            };
            this.addNewHero = this.addNewHero.bind(this);
            this.rowClick = this.rowClick.bind(this);
        }
   
   
    rowClick (event){
        let inp = document.getElementsByClassName("inputname");
        let selectedH = event.target;      
        let someH = selectedH.id;
            someH = someH - 1;
        let oList = this.state.list;
        for ( let i = 0; i < oList.length; i++){
            if (someH == i){
                inp[0].value = oList[i].firstName;
                inp[1].value = oList[i].lastName;
            }
        }
        
    }
    
    addNewHero(event){             
        let inp = document.getElementsByClassName("inputname");
        let oldList = this.state.list;
        let newHero = [{firstName:inp[0].value,lastName:inp[1].value}];
        
        
        if(event.target.textContent == "Add Hero"){
        
            this.setState({
                list:oldList.concat(newHero),
                firstName:"", lastName:"",
            });
            inp[0].value="";
            inp[1].value="";          
        }
        
    }
 
        render() {
            return ( 
            <div>
                <MyList list={this.state.list} rowClick={this.rowClick}/>
                <AddForm addHero={this.addNewHero} firstName={this.firstName} lastName={this.lastName} />           
            </div>
            );
        }

    }


class MyList extends React.Component {
    render () {
        let thlist = cols;
        let k = 0;
        let key = 0;
        let newHead = thlist.map (x=>  <th key={k++}>{x.label}</th>);       
        const newBody = this.props.list.map (y=> <tr className="row" key={key++} onClick={this.props.rowClick}><td id={key}>{y.firstName}</td><td id={key}>{y.lastName}</td></tr>);
            return (
                <table id="tab">
                    <thead><tr>{newHead}</tr></thead>
                    <tbody>{newBody}</tbody>
                </table>
            );
    }
}

class AddForm extends React.Component {
    render () {
        return (
            <div>
                <form id="inputForm">
                    <input type="text" className="inputname" id="hero1" placeholder="Firstname" name="firstName" value={this.props.firstName} />
                    <input type="text" className="inputname" placeholder="Lastname" name="lastName" value={this.props.lastName} />
                    <button id="addButt" type="button" onClick={this.props.addHero}>Add Hero</button>
                </form>
            </div>
        );
    }
}


    
    ReactDOM.render(
        <App></App>,
        document.getElementById('modul1')
    )
    
    