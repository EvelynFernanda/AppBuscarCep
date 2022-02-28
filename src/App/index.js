/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
} from 'react-native';
import styles from './styles';
import api from '../services/api';

export default function App() {
  const [cep, setCep] = useState('');
  const inputRef = useRef();
  const [cepUser, setCepUser] = useState(null);

  async function buscar() {
    if (cep == '') {
      alert('Digite um cep valido');
      setCep('');
      return;
    }
    try {
      const response = await api.get(`${cep}/json`);
      setCepUser(response.data);
      Keyboard.dismiss();
    } catch (error) {
      console.log('ERRO: ' + error);
    }
  }

  function limpar() {
    setCep('');
    inputRef.current.focus();
    setCepUser(null);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}>Digite o cep desejado</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 1480988"
          value={cep}
          onChangeText={texto => setCep(texto)}
          keyboardType="numeric"
          ref={inputRef}
        />
      </View>
      <View style={styles.areaBtn}>
        <TouchableOpacity style={styles.botao} onPress={buscar}>
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={limpar}>
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>
      {cepUser && (
        <View style={styles.resultado}>
          <Text style={styles.itemText}> CEP: {cepUser.cep}</Text>
          <Text style={styles.itemText}> Logradouro: {cepUser.logradouro}</Text>
          <Text style={styles.itemText}> Bairro: {cepUser.bairro}</Text>
          <Text style={styles.itemText}> Cidade: {cepUser.localidade}</Text>
          <Text style={styles.itemText}> Estado: {cepUser.uf}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
