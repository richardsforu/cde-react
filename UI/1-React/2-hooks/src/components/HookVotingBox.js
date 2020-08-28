import React,{useReducer} from 'react';

const reducer=(state,action)=>{
    let {type,value}=action;
    switch(type){
        case 'INCREMENT':{
           return {...state,count:state.count+value} 
        }
        case 'DECREMENT':{
            return {...state,count:state.count-value}
        }
        case 'RESET':{
            return {...state,count:0}
        }       
    }
 }

// store
const initialState = {
    count:1000,
    name:'Praveen'
}




function HookVotingBox(props) {

    const  [state,dispatch]=useReducer(reducer,initialState)
    const {count}=state;

    const[secondState,secondDispatch]=useReducer(reducer,initialState)
    const{count:secondCount}=secondState

    

    return (
       
        <div>
            <pre>
               {JSON.stringify(state)}
            </pre>

            <div className="card">
            <div className="card-header">Vote1</div>
        <div className="card-body">
            <div className="row">
            <div className="col-2">
              <button className="btn btn-primary" onClick={e=>dispatch({type:'INCREMENT',value:1})}>+1</button>
            </div>
            <div className="col-2">
              <button className="btn btn-primary" onClick={e=>dispatch({type:'DECREMENT',value:1})}>-1</button>
            </div>
            <div className="col-2">
              <button className="btn btn-primary" onClick={e=>dispatch({type:'INCREMENT',value:10})}>+10</button>
            </div>
            <div className="col-2">
              <button className="btn btn-primary" onClick={e=>dispatch({type:'DECREMENT',value:10})}>-10</button>
            </div>
            <div className="col-2">
              <button className="btn btn-primary" onClick={e=>dispatch({type:'RESET',value:1})}>Reset</button>
            </div>
           </div>
        </div>
    </div>
    <hr/>

    <div className="row">
        <div className="col-12 text-center">
    <h5>Count: {count}</h5>
        </div>
    </div>


    <hr/>


    <div className="card">
            <div className="card-header">Vote2</div>
        <div className="card-body">
            <div className="row">
            <div className="col-2">
              <button className="btn btn-primary" onClick={e=>secondDispatch({type:'INCREMENT',value:1})}>+1</button>
            </div>
            <div className="col-2">
              <button className="btn btn-primary" onClick={e=>secondDispatch({type:'DECREMENT',value:1})}>-1</button>
            </div>
            <div className="col-2">
              <button className="btn btn-primary" onClick={e=>secondDispatch({type:'INCREMENT',value:10})}>+10</button>
            </div>
            <div className="col-2">
              <button className="btn btn-primary" onClick={e=>secondDispatch({type:'DECREMENT',value:10})}>-10</button>
            </div>
            <div className="col-2">
              <button className="btn btn-primary" onClick={e=>secondDispatch({type:'RESET',value:0})}>Reset</button>
            </div>
           </div>
        </div>
    </div>
    <hr/>

    <div className="row">
        <div className="col-12 text-center">
    <h5>Count: {secondCount}</h5>
        </div>
    </div>
            
        </div>
    );
}

export default HookVotingBox;