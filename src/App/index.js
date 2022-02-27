import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import styles from './styles';

export default function App() {
  const [cep, setCep] = useState('');
  const inputRef = useRef();

  function limpar() {
    setCep('');
    inputRef.current.focus();
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
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={limpar}>
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultado}>
        <Text style={styles.itemText}> CEP: 15989302</Text>
        <Text style={styles.itemText}> Logradouro: 15989302</Text>
        <Text style={styles.itemText}> Bairro: 15989302</Text>
        <Text style={styles.itemText}> Cidade: 15989302</Text>
        <Text style={styles.itemText}> Estado: 15989302</Text>
      </View>
    </SafeAreaView>
  );
}
