import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookUserForm from './components/HookUserForm';
import HookVotingBox from './components/HookVotingBox';



function App() {
  return (
    <div className="container">
      <h1>Hooks_</h1> <hr/>
      <ClassCounter/>
      <hr/>
      <HookCounter/>
      <hr/>
      <HookUserForm/>
      <hr/>
      <HookVotingBox/>
    </div>
     
  );
}

export default App;
