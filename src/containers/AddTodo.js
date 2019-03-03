import React, { Component } from 'react'
import { 
  Text, 
  View, 
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
import { addTodo } from '../actions'
class AddTodo extends Component {

  state = {
    text: ''
  }

  addTodo = (text) => {
    this.props.dispatch(addTodo(text))
    this.setState({text: ''})
  }

  render() {
    return (
      <View style={{flexDirection:'row', marginHorizontal: 15, marginTop: 15}}>
        <TextInput
          onChangeText = {(text) => this.setState({text})}
          value = {this.state.text}
          placeholder="Eg. Create New Video"
          style={styles.txtInput}
        >
        </TextInput>
        <TouchableOpacity onPress={()=> this.addTodo(this.state.text)}>
          <View style={{height: 50, width: 30, backgroundColor: "#eaeaea", 
            alignContent: 'center', justifyContent: 'center'}}>
            <Ionicons name="ios-add" size={30}/>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  txtInput: {
    borderWidth: 1,
    borderColor:'#f3f3e1', 
    backgroundColor: "#eaeaea", 
    height: 50, 
    flex: 1, 
    padding: 10
  }
});

export default connect()(AddTodo);
