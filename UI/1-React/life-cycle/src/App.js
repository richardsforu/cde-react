import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Greet from './Greet';

class App extends Component {
  constructor(){ //  // only one time in a life cycle
    console.log("==> APP::Constructor");
    super();
    this.state = {
      msg:'Loading...'
    }
  }

  componentDidMount(){ // only one time in a life cycle
    console.log("==> APP::componentDidMount");
    setTimeout(()=>{
      let response ='Hello react!'
     this.setState({msg:response})
    },3000)
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    // every time when render is re executed
    console.log("==> APP::componentDidUpdate");
   }

  chnageGreeting(message) {
    console.log("==> changeGreeting:: "+message);
    this.setState({msg:message});
  }
  render() {
    console.log("==> APP::render ")
    let {msg}=this.state;
    return (
      <div className="container">
      
     <h1>Component Life Cycle </h1> <hr/>
     <div  className="card">
       <div className="card-header">APP Component</div>
      <div className="card-body">
      <button className="btn btn-primary btn-space" onClick={e=>this.chnageGreeting('Good Morning')}>Good Morming</button>
     <button className="btn btn-primary btn-space" onClick={e=>this.chnageGreeting('Good Afternoon')}>Good Afternoon</button>
     <button className="btn btn-primary btn-space" onClick={e=>this.chnageGreeting('Good Evening')}>Good Evening</button>
     <button className="btn btn-danger btn-space" onClick={e=>this.chnageGreeting('')}>Remove</button>

      </div>

     </div>
     
      <hr/>

       {msg ? <Greet msg={msg}/> :null}

    </div>
    );
  }
}

export default App;


