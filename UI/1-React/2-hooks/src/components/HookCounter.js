import React,{useState} from 'react';
const HookCounter=()=> {

       const[count,sum]= useState(0); // internally retuns an array
       let add=()=>{
           sum(count+1)
       }

   
    return (
        <div>
              <div className="card">
                 <div className="card-header">Hook Counter</div>
                 <div className="card-body">
    <button className="btn btn-primary" onClick={add}>Hit - {count}</button>
   
                 </div>
                </div>
        </div>
    );
}

export default HookCounter;