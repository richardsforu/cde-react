import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let myDom= document.getElementById('root')
ReactDOM.render(<App />,myDom);

serviceWorker.unregister();
