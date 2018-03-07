

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  TextInput,
  Text,
  View
} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      panjang: 0,
      lebar: 0,
      tinggi: 0,
      volume: 0
    };
  }

  render() {
    return (

      <View style={{ flex: 1, backgroundColor: '#DCE775' }}>

        <View style={{ backgroundColor: '#827717' }}>
           <Text style={{ padding: 10, fontSize: 20, color: 'white', textAlign: 'center' }} >
            Menghitung Volume Balok
          </Text>
        </View>

        <View style={{ margin: 20, padding: 10, backgroundColor: '#e3f2fd' }}>
          <TextInput style={{ height: 40 }}
              placeholder="Masukkan Panjang"
              onChangeText={(panjang) => this.setState({ panjang })}
              keyboardType='numeric'
            />

          <TextInput style={{ height: 40 }}
              placeholder="Masukkan Lebar"
              onChangeText={(lebar) => this.setState({ lebar })}
              keyboardType='numeric'
            />

          <TextInput style={{ height: 40 }}
          placeholder="Masukkan Tinggi"
          onChangeText={(tinggi) => this.setState({ tinggi })}
          keyboardType='numeric'
          />

             <Button
              onPress={()=>this.setState({
                volume: (this.state.panjang*this.state.lebar*this.state.tinggi)
              })}
              title="Hitung"
              color='rgb(154, 142, 31)'
              accessibilityLabel="Klik untuk menghitung"
            />

        </View>

        <View style={{ margin: 20, backgroundColor: 'rgb(255, 255, 255)' }}>
          <Text style={{ padding: 15, fontSize: 18 }} >
              Panjang = {this.state.panjang} {"\n"}
              lebar = {this.state.lebar} {"\n"}
              Tinggi = {this.state.tinggi} {"\n\n"}
          </Text>
         </View>

         <View style={{ margin: 20, backgroundColor: 'rgb(255, 255, 255)'}}>
         <Text style={{ padding: 20, fontSize: 20 }} >
             Volume = {this.state.volume}
         </Text>
         </View>
      </View>

      );
  }
}

AppRegistry.registerComponent('latihan', () => App);
