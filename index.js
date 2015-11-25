var ReactDOM = require('react-dom');
var React = require('react');
var App = require('./containers/App');
require('todomvc-app-css/index.css');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
