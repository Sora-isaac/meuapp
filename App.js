import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Switch } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sexo: [
        { key: 1, valor: 'masculino' },
        { key: 2, valor: 'feminino' },
        { key: 3, valor: 'outro' },
        { key: 4, valor: 'prefiro nao informar' }
      ],
      sexoSelecionado: 'masculino', // valor inicial correspondente à primeira opção
      valor: 0,
      status: false
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1}></View>
        <View style={styles.box2}>
          <TextInput style={[styles.input, styles.overlay, { marginLeft: 10 }]} />
          <TextInput style={[styles.input, styles.overlay, { marginLeft: 10 }]} />
          <View style={styles.pickercontainer}>
            <ModalDropdown
              options={this.state.sexo.map(item => item.valor)}
              defaultValue={this.state.sexoSelecionado}
              onSelect={(index, value) => this.setState({ sexoSelecionado: value })}
              style={styles.dropdown}
              textStyle={styles.dropdownText}
              dropdownStyle={styles.dropdownContainer}
            />

            <Switch 
              value={this.state.status}
              onValueChange={(valorSwitch) => this.setState({ status: valorSwitch })}
            />

            <Text>
              {this.state.status ? 'estudante' : 'clt'}
            </Text>
          </View>
          <View>
            {/* Implemente outros componentes conforme necessário */}
            <Text style={{ textAlign: 'center', fontSize: 30 }}>
              {this.state.valor}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropdown: {
    width: 200,
    height: 40,
    borderRadius: 5,
    backgroundColor: 'beige',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  dropdownText: {
    fontSize: 16,
    textAlign: 'center',
  },
  dropdownContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'beige',
    backgroundColor: 'white',
  },
  input: {
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'beige',
    width: 200,
    marginBottom: 10,
  },
  box1: {
    backgroundColor: 'gray',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickercontainer: {
    width: 200,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'beige',
    backgroundColor: 'white',
  },
  box2: {
    backgroundColor: 'gray',
    width: 500,
    height: 200,
    position: 'absolute',
    top: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;