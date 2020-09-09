import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import VotingBox from './component/VotingBox';
const App = () => {
  return (
    <div className="container">
      <h1>useReducer</h1> <hr/>

      <VotingBox/>
    </div>
  );
};

export default App;