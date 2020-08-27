import React, { Component } from 'react';

class Greet extends Component {
    constructor(){
        console.log("==> Greet::Constructor");
        super();
    }

    componentDidMount(){

        console.log("==> Greet::componentDidMount");
        this.interval = setInterval(()=>{
           this.forceUpdate();
        },1000)
      
      }

      componentWillUnmount(){
          console.log("==> Greet::componentWillUnmount");
          clearInterval(this.interval);
      }



      componentDidUpdate(prevProps, prevState, snapshot){
          console.log("==> Greet::componentDidUpdate");
          console.log(this.props);
          console.log(prevProps);

      }

      shouldComponentUpdate(nextProps,nextState) { // defaultg called by react
        //return true;
       return this.props.msg!==nextProps.msg;
      }

    render() {
        console.log("==> Greet::render");
        return (
            <div>

        <div className="card">
            <div className="card-header">Greet Component</div>
            <div className="card-body">
            <h1>{this.props.msg}</h1>
            </div>
        </div>
       
                
            </div>
        );
    }
}

export default Greet;