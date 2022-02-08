import './App.css';
import React, {Component} from 'react';


export default class App extends Component {

  state = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    zero: "0",
    text: "",
    history: "history",
  }
 
//handling all button here  
  handlenumber = (e) => {
    var a = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    // console.log(a[0])
    this.setState({ 
      one: a[0],
      two: a[1],
      three: a[2],
      four: a[3],
      five: a[4],
      six: a[5],
      seven: a[6],
      eight: a[7],
      nine: a[8],
      zero: a[9],
    });
    this.setState({
      text: this.state.text.concat(e.target.name),
    });
  }
  
 //hadnling clear input field 
  handleclear = () => {
    this.setState({
      text: ''
    });
  }

 //handling answers 
  handleans = (e) => {
 
    if (this.state.text.charAt(0) === 0) {
      let texti = this.state.text.substring(1).toString()
      try {
        texti = eval(texti)
      } catch (error) {
        // console.log(error);
      }
      this.setState({
        text: eval(texti),
        history: this.state.text.concat(e.target.name).slice(0, -1)
      });

    } else {
      try {eval(this.state.text).toString()} catch (error) {
        alert("enter valid input")
      } 
      // if (eval(this.state.text).toString().length > 4) {
      //   // console.log("error");
      // }
      this.setState({
        text: eval(this.state.text).toString(),
        history: this.state.text.concat(e.target.name).slice(0, -1)
      });
    }
  }

 //handling cut varible 
  handlecut = (e) => {
    this.setState({
      text: this.state.text.slice(0, -1),
    });
  }

  render() {
   
    return (
      <div className="main">
        <div className="display">
          <p id="history">{ this.state.history}</p>
          <h2 id="result">{ this.state.text}</h2>
        </div>
        <div className="buttons">
          <button id="clear" onClick={this.handleclear}>C</button>
          <button id="delete_single_num" onClick={this.handlecut}><i className="fa fa-scissors"
              aria-hidden="true"></i></button>
          <button id="Normal_btn" name="/" onClick={this.handlenumber}>/</button>
          <button id="Normal_btn" name="*" onClick={this.handlenumber}>*</button>
        </div>
        <div className="buttons">
          <button id="Normal_btn" name={this.state.seven} onClick={this.handlenumber}>{this.state.seven}</button>
          <button id="Normal_btn" name={this.state.eight} onClick={this.handlenumber}>{this.state.eight}</button>
          <button id="Normal_btn" name={this.state.nine} onClick={this.handlenumber}>{this.state.nine}</button>
          <button id="Normal_btn" name="-" onClick={this.handlenumber}>-</button>
        </div>
        <div className="buttons">
          <button id="Normal_btn" name={this.state.four} onClick={this.handlenumber}>{this.state.four}</button>
          <button id="Normal_btn" name={this.state.five} onClick={this.handlenumber}>{this.state.five}</button>
          <button id="Normal_btn" name={this.state.six} onClick={this.handlenumber}>{this.state.six}</button>
          <button id="Normal_btn" name="+" onClick={this.handlenumber}>+</button>
        </div>
        <div className="buttons">
          <button id="Normal_btn" name={this.state.one} onClick={this.handlenumber}>{ this.state.one}</button>
          <button id="Normal_btn" name={this.state.two} onClick={this.handlenumber}>{this.state.two}</button>
          <button id="Normal_btn" name={this.state.three} onClick={this.handlenumber}>{this.state.three}</button>
          <button id="Normal_btn" name="." onClick={this.handlenumber}>.</button>
        </div>
        <div className="buttons">
          <button id="Normal_btn" name={this.state.zero} onClick={this.handlenumber}>{this.state.zero}</button>
          <button id="Normal_btn" name="00" onClick={this.handlenumber}>00</button>
          <button id="equalTo" name="=" onClick={this.handleans}>=</button>
        </div>
      </div>
    )
  }
}