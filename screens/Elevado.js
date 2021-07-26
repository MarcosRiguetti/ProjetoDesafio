import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default function Elevado() {
    const navigation = useNavigation();
    const [numero, setNumero] = useState(null);
    
  return (
    <>
      <Text style={styles.titulo}>Cubo e Quadrado</Text>
      <Text style={styles.pergunta}>Informe o Número:</Text>
      <TextInput
        keyboardType = 'numeric'
        style={styles.entrada}
        placeholder=""
        onChangeText={(valor) => setNumero(valor)}
      />
      <View>
        <Text style={styles.saida1}>
          O Quadrado do número escolhido foi: {Math.pow(numero, 2)}
        </Text>
        <Text style={styles.saida2}>
          O Cubo do número escolhido foi: {Math.pow(numero, 3)}{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.volta}>RETORNAR</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  titulo: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  pergunta: {
    padding: 2,
    marginTop: 30,
    fontSize: 20,
  },
  entrada: {
    marginTop: 2,
    borderWidth: 2,
    textAlign: 'center',
    height: 30,
    borderRadius: 2,
    borderColor: '#20232a'
  },
  saida1: {
    marginTop: 50,
    fontSize: 16,
  },
  saida2: {
    marginTop: 20,
    fontSize: 16,
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
