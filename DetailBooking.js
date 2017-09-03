import React from 'react';
import { StyleSheet, Text, View, ListView, Image,TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class DetailBooking extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <TouchableHighlight > 
            <View style={styles.container} >
                <View style={styles.content}>
                    <Text style={styles.title}>{this.props.Room}</Text>  
                    <Text style={styles.detail}>{this.props.Date}</Text>   
                    <Text style={styles.detail}>{this.props.Time}</Text>
                </View>
            </View>
            </TouchableHighlight>
            )
        }


}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#1bd6c9",
    height:100,
    flexDirection:'row',
    borderColor: '#ffffff',
    borderWidth:5,
  },
  title:{
     color: 'black',
     fontWeight: 'bold',
     fontSize:30
  },
  detail:{
      color:"#555555",
      fontStyle:"italic",
      fontSize:20
  }
});