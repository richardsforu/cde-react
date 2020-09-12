import React, { useState, useReducer } from 'react';
// store
const initialState = {
    count: 0
}

const secondInitialState ={ 
    count: 10
}

const reducer = (state, action) => {
    let { type, value } = action;

    switch (type) {
        case 'INCREMENT': {
            return { ...state, count: state.count + value }
        }
        case 'DECREMENT': {
            return { ...state, count: state.count - value }
        }
        case 'DEFAULT': {
            return { ...state, count: 0 }
        }
    }


}




const VotingBox = () => { // component area

    const [state, dispatch] = useReducer(reducer, initialState);
    const [secondState, secondDispatch] = useReducer(reducer, secondInitialState);

    let { count } = state;
    let {count:secondCount} = secondState;
    return (

        <div className="row">


            <div className="col-6">
                <div className="card">
                    <div className="card-header">Voter1</div>
                    <div className="card-body text-center">
                        <button className="btn btn-primary" style={{ margin: "5px" }} onClick={e => { dispatch({ type: 'INCREMENT', value: 1 }) }}>Increment</button>
                        <button className="btn btn-primary" onClick={e => { dispatch({ type: 'DECREMENT', value: 1 }) }}>Decrement</button>
                        <button className="btn btn-primary" onClick={e => { dispatch({ type: 'DEFAULT' }) }}>Reset</button>
                    </div>

                    <div className="card-footer text-center">
                        <h2>{count}</h2>
                    </div>
                </div>
                </div>

                <div className="col-6">
                    <div className="card">
                        <div className="card-header">Voter2</div>
                        <div className="card-body text-center">
                            <button className="btn btn-primary" style={{ margin: "5px" }} onClick={e => { secondDispatch({ type: 'INCREMENT', value: 1 }) }}>Increment</button>
                            <button className="btn btn-primary" onClick={e => { secondDispatch({ type: 'DECREMENT', value: 1 }) }}>Decrement</button>
                            <button className="btn btn-primary" onClick={e => { secondDispatch({ type: 'DEFAULT'}) }}>Reset</button>
                        </div>

                        <div className="card-footer text-center">
                            <h2>{secondCount}</h2>
                        </div>
                    </div>
                </div>

            
        </div>

    );
};

export default VotingBox;