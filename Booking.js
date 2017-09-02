import React,{Component} from 'react';
import { StyleSheet, Text, View ,ListView} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Router, Scene } from 'react-native-router-flux'; 
import firebase from './firebase';

export default class Booking extends Component {
    constructor() {
      super();
      this.ref = null;
      this.listView = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      });
  
      this.state = {
        todos: this.listView.cloneWithRows({}),
      };
  
      // Keep a local reference of the TODO items
      this.todos = {};
    }
  
    // Load the Todos on mount
    componentDidMount() {
      this.ref = firebase.database().ref('Booking');
      this.ref.on('value', this.handleToDoUpdate);
    }
  
    // Unsubscribe from the todos on unmount
    componentWillUnmount() {
      if (this.ref) {
        this.ref.off('value', this.handleToDoUpdate);
      }
    }
  
    // Handle ToDo updates
    handleToDoUpdate = (snapshot) => {
      this.todos = snapshot.val() || {};
  
      this.setState({
        todos: this.listView.cloneWithRows(this.todos),
      });
    }
  

  
    // Render a ToDo row
    renderToDo(todo) {
      // Dont render the todo if its complete
      if (todo.complete) {
        return null;
      }
  
      return (
        <View>
          <Text>{todo.Room}</Text>
          
        </View>
      );
    }
  
    // Render the list of ToDos with a Button
    render() {
      return (
        <View>
          <ListView
            dataSource={this.state.todos}
            renderRow={(...args) => this.renderToDo(...args)}
          />
        </View>
      );
    }
}