import React,{useState} from 'react';

const App = () => {

  const[name,setName]=useState('');

  function setUserName(e){
    e.preventDefault();
    setName(e.target.value);
    console.log('Name: '+name);
  }

  return (
    <div>

      <h1>Demo</h1> <hr/>

    <form onSubmit={setUserName}>
    <input type="text" name="userName" onBlur={setUserName}/>
     <button onClick={setUserName}>Click Me</button>
    </form>
   
  <h1>Name: {name}</h1>
      
    </div>
  );
};

export default App;