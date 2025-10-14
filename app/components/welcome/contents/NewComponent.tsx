// import { count } from "console";
import React, {Component} from "react"
import {userData} from './Data'
 




class NewContent extends Component {
  state = {
      count: 0
  };

  increment =() => {
    // @ts-ignore 
    this.setState((prevState)=>({count: prevState.count +1}), 
  () =>console.log ('State is completed plus')
  );
  } 
  decrement =() => {
    // @ts-ignore 
    this.setState((prevState)=>({count: prevState.count -1}), 
  () =>console.log ('State is completed minus')
  );
  } 
  reset =() => {
    // @ts-ignore 
    this.setState((prevState)=>({count: 0}), 
  () =>console.log ('State is completed reset')
  );
  } 


  render() {


    return (
      <div className="NewComp" style={{margin: 'auto',width: '400px'}}>
        <h1> New element in ElectronReactApp</h1>
        <button className="btn" onClick={this.increment}>Inc</button>
        <button className="btn" onClick={this.decrement}>Dec</button>
        <button className="btn" onClick={this.reset}>Res</button>
        <h1>{`Значение коунтера: ${this.state.count}`}</h1>
        <ul>
      {userData.map(item => (
        <li key={item.id}>{item.name}: --{item.value}--{item.name}</li>
      ))}
    </ul>
      </div>
    )

  }
}

export default NewContent
