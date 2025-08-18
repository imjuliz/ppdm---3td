import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [nome, setNome] = useState('')
  return (
    <View style={styles.container}>
     <TextInput placeholder='Informe seu nome...' value={nome} onChangeText={(nome)=> setNome(nome)}/>
    <Text>Seja Bem-vindo {nome}</Text>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
