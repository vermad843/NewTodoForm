import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions } from '../store';

import NewTodoForm from '../component/NewTodoForm';

class TodoApp extends Component {
  render() {
    return (
      <div className="App">
        <NewTodoForm
            newTodo={this.props.newTodo}
            formSubmitted={this.formSubmitted.bind(this)}
            newTodoChanged={this.props.onNewTodoChanged} />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return  {
   newTodo : state.newTodo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNewTodoChanged(newTodo)  {
      dispatch(actions.newTodoChanged(newTodo));
    }, 
 }

}




export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);