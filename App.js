import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      title: 'Opa'
    }

    this.entrar = this.entrar.bind(this)
  }

  entrar(title) {
    this.setState({ title: title })
  }

  render() {
    return (
      <View style={ styles.view }>

        <Text>Texto 1</Text>
        <Text>Texto 2</Text>
        <Text>Texto 3</Text>
        <Text>Texto 4</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: 'red'
  }
})