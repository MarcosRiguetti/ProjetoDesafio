import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <>
      <View>
        <Text style={styles.titulo}>Seja Bem Vindo!</Text>
        <Text style={styles.frase}>Selecione uma das opções: </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Tabuada')}>
        <Text style={styles.tabuada}>Tabuada</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Quadrado e Cubo')}>
        <Text style={styles.elevado}>Quadrado e o Cubo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Distancia')}>
        <Text style={styles.distancia}>Distância Entre 2 Pontos</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  titulo: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  frase: {
    marginTop: 30,
    fontSize: 20
  },
  tabuada: {
    marginTop: 50,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    paddingVertical: 8,
  },
  elevado: {
    marginTop: 50,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    paddingVertical: 8,
  },
  distancia: {
    marginTop: 50,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    paddingVertical: 8,
  }
});