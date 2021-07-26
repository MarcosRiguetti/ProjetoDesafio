import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function Distancia() {
  const navigation = useNavigation();

  const [numeroA1, setNumeroA1] = useState(null);
  const [numeroA2, setNumeroA2] = useState(null);
  const [numeroB1, setNumeroB1] = useState(null);
  const [numeroB2, setNumeroB2] = useState(null);

  return (
    <>
      <View>
        <Text style={styles.titulo}>Distância Entre Pontos</Text>
        <Text style={styles.frase}>Informe os valores abaixo:</Text>

        <Text style={styles.texto}>Informe o ponto A1: </Text>
        <TextInput
          keyboardType = 'numeric'
          style={styles.entrada}
          placeholder=""
          onChangeText={(valorA1) => setNumeroA1(valorA1)}
        />
        <Text style={styles.texto}>Informe o ponto A2:</Text>
        <TextInput
          keyboardType = 'numeric'
          style={styles.entrada}
          placeholder=" "
          onChangeText={(valorA2) => setNumeroA2(valorA2)}
        />
        <Text style={styles.texto}>Informe o ponto B1: </Text>
        <TextInput
          keyboardType = 'numeric'
          style={styles.entrada}
          placeholder=""
          onChangeText={(valorB1) => setNumeroB1(valorB1)}
        />
        <Text style={styles.texto}>Informe o ponto B2: </Text>
        <TextInput
          keyboardType = 'numeric'
          style={styles.entrada}
          placeholder=""
          onChangeText={(valorB2) => setNumeroB2(valorB2)}
        />
        <Text>
          A distancia entre os pontos escolhidos é:
          {Math.sqrt(
            Math.pow(numeroA2 - numeroA1, 2) + Math.pow(numeroB2 - numeroB1 , 2)
          )}
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
  frase: {
    marginTop: 50,
    fontSize: 20,
  },
  texto: {
    marginTop: 20,
    fontSize: 18,
  },
  entrada: {
    marginTop: 2,
    borderWidth: 2,
    textAlign: 'center',
    height: 30,
    borderRadius: 2,
    borderColor: '#20232a',
  },
  volta: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    paddingVertical: 8,
  },
});
