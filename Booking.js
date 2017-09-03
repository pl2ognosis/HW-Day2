import React,{Component} from 'react';
import { StyleSheet, Text, View ,ListView , TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Router, Scene } from 'react-native-router-flux'; 
import firebase from './firebase';
import DetailBooking from './DetailBooking';
import AddList from './AddList';

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
    _renderRow = rowData=>{
      return <DetailBooking {...rowData} />
    }
  
    // Render the list of ToDos with a Button
    render() {
      return (
        <View style={styles.container}> 
          <ListView
            dataSource={this.state.todos}
            renderRow={this._renderRow}
          />
          <TouchableHighlight style={styles.button} onPress={Actions.AddList} underlayColor='#99d9f4'>
            <Text style={styles.buttonText} >Booking !!!</Text>
          </TouchableHighlight>
        </View>
        
      );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginBottom : 5
  },
  button: {
    height: 40,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
});