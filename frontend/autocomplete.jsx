import React from 'react';

class AutoComplete extends React.Component {
  constructor({names}) {
    super();
    this.names = names;
    this.state = {matchedNames: names, inputVal: ""};
    this.findNames = this.findNames.bind(this);
    this.nameList = this.nameList.bind(this);
  }

  findNames(e){
    let input = e.target.value;
    let matched;
    if (input === "") {
      matched = this.names;
    } else {
      matched = this.names.filter((name)=>name.startsWith(input));
    }
    this.setState({matchedNames: matched});
  }

  nameList(){
    return this.state.matchedNames.map((name, i)=>{
      return <li key={name}>{name}</li>;
    });
  }

  render(){
    return (
      <div className="widget" id="autocomplete">
        <h1>Autocomplete</h1>
        <input type="text" onKeyUp={this.findNames}></input>
        <ul>
          {this.nameList()}
        </ul>
      </div>
    );
  }
}

export default AutoComplete;
