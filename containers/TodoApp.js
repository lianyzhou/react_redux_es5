var React = require('react');
var bindActionCreators = require('redux').bindActionCreators;
var connect=require("react-redux").connect;
var Header = require('../components/Header');
var MainSection = require('../components/MainSection');
var TodoActions = require('../actions/TodoActions');

var TodoApp = React.createClass({
      render: function() {
        var actions=this.props.actions;
        var todos=this.props.todos;
        return (<div>
                  <Header addTodo={actions.addTodo} />
                  <MainSection todos={todos} actions={actions} />
                </div>);
      },
});

function mapStateToProps(state) {
    return {
        todos: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators(TodoActions , dispatch)
    };
}


module.exports = connect(mapStateToProps,mapDispatchToProps)(TodoApp);