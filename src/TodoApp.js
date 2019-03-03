import React, { Component } from 'react'
import { 
  Text,
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'
import AddTodo from './containers/AddTodo'
import VisibleTodos from './containers/VisibleTodos'

export default class TodoApp extends Component {

  state = {
    todos:[],
    visibilityFilter: 'SHOW_ALL_TODOS'
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View>
            <AddTodo />
            <View>
              <VisibleTodos />
            </View>
          </View> 
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  }
});