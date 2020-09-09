import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import counterActions from './actions/counterActions';
import userActions from './actions/userActions';

const App = () => {

  const counter = useSelector(state => state.counter)
  const currentUser = useSelector(state => state.currentUser)



  const dispatch = useDispatch()

  const user = { name: "Praveen" }

  useEffect(() => {
    dispatch(userActions.setUser(user))
  }, [])




  return (
    <div className="container">
      <div>
        <h1>Reducer Demo</h1> <hr />

        {
          currentUser.loggedIn ? <>
            <h1>Hello, {currentUser.user.name}</h1>
            <button onClick={() => dispatch(userActions.logOut())}>Logout</button>
          </>
            :
            <>
              <h1>Login</h1>
              <button onClick={() => dispatch(userActions.setUser(user))}>Login as Praveen</button>
            </>
        }
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch(counterActions.increment())}>Increase Counter</button>
        <button onClick={() => dispatch(counterActions.decrement())}>Decrease Counter</button>
      </div>

    </div >
  );
};

export default App;