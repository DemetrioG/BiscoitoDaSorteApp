import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      showFrase: '',
      img: require('./src/biscoito.png')
    }

    this.frases = [
      'A persistência é o caminho do êxito.',
      'Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer.',
      'Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer.',
      'No meio da dificuldade encontra-se a oportunidade.',
      'Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.',
      'A verdadeira motivação vem de realização, desenvolvimento pessoal, satisfação no trabalho e reconhecimento.',
      'Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.',
      'É parte da cura o desejo de ser curado.'
    ]

    this.getFrase = this.getFrase.bind(this)
  }

  getFrase() {
    let aleatorio = Math.floor(Math.random() * this.frases.length)
    
    this.setState({
      showFrase: this.frases[aleatorio],
      img: require('./src/biscoitoAberto.png')
    })
  }

  render(){
    return (
      <View style={style.container}>
        
        <Image source={this.state.img} style={style.img}/>

        <Text style={style.textFrase}>{this.state.showFrase}</Text>

        <TouchableOpacity style={style.btn} onPress={this.getFrase}>
          <View style={style.btnArea}>
            <Text style={style.btnText}>Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>

      </View>
    )
  }
}

const style = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  img: {
    width: 250,
    height: 250
  },

  textFrase: {
    fontSize: 20,
    textAlign: 'center',
    padding: 15
  },

  btn: {
    width: 200,
    height: 50,
    backgroundColor: '#F29C41',
    borderRadius: 20,
    padding: 10,
    marginTop: 80
  },

  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  btnText: {
    fontSize: 16,
    fontWeight: '700'
  }
})