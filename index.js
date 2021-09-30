import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
serviceWorker.unregister();