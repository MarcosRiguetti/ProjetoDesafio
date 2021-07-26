import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default function Tabuada() {
    const navigation = useNavigation();
    const [numero, setNumero] = useState(null);

  return (
    <>
      <Text style={styles.titulo}>TABUADAS</Text>
      <Text style={styles.pergunta}>Informe o Número:</Text>
      <TextInput
        keyboardType = 'numeric'
        style={styles.entrada}
        placeholder=""
        onChangeText={(valor) => setNumero(valor)}
      />
      <View>
        <Text style={styles.texto}>Tabuada do número {numero}</Text>
        <Text style={styles.tabela}>
          1 x {numero} = {1 * numero}
        </Text>
        <Text style={styles.numero}>
          2 x {numero} = {2 * numero}
        </Text>
        <Text style={styles.numero}>
          3 x {numero} = {3 * numero}
        </Text>
        <Text style={styles.numero}>
          4 x {numero} = {4 * numero}
        </Text>
        <Text style={styles.numero}>
          5 x {numero} = {5 * numero}
        </Text>
        <Text style={styles.numero}>
          6 x {numero} = {6 * numero}
        </Text>
        <Text style={styles.numero}>
          7 x {numero} = {7 * numero}
        </Text>
        <Text style={styles.numero}>
          8 x {numero} = {8 * numero}
        </Text>
        <Text style={styles.numero}>
          9 x {numero} = {9 * numero}
        </Text>
        <Text style={styles.numero}>
          10 x {numero} = {10 * numero}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.volta}>RETORNAR</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  volta: {},
  titulo: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  pergunta: {
    padding: 2,
    marginTop: 50,
    fontSize: 20,
  },
  entrada: {
    marginTop: 2,
    borderWidth: 2,
    textAlign: 'center',
    height: 30,
    borderRadius: 2,
    borderColor: '#20232a',
  },
  texto: {
    marginTop: 60,
    textAlign: 'center',
  },
  tabela: {
    marginTop: 20,
    padding: 5,
    fontSize: 14,
  },
  numero: {
    fontSize: 14,
    padding: 5,
  },
  volta: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    paddingVertical: 8,
  }
});
