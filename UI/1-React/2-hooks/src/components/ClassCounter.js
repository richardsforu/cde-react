import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor(){
        super();
        this.state = {
            count:0
        }
    }

    increment=()=>{
        let {count}=this.state;
        this.setState({count:count+1})
    }
    
    render() {
        let {count}=this.state;

        return (
            <div>

                <div className="card">
                 <div className="card-header">Class Counter</div>
                 <div className="card-body">
        <button className="btn btn-primary" onClick={this.increment}>Hit - {count}</button>
                 </div>
                </div>

                
            </div>
        );
    }
}

export default ClassCounter;