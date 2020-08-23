import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.less';

import App from './App';

import './index.less';


const mountNode = document.getElementById('app');
const app = React.createElement(App);
ReactDOM.render(app, mountNode);
