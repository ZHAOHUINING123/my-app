import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/style.css'
import App from './App';
import 'antd/dist/antd.css';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
