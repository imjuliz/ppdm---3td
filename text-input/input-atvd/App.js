import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'; 
import { useState } from 'react';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imcResult, setImcResult] = useState('');
  const [estado, setEstado] = useState('');

  function calcularIMC() {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura) / 100; // converte cm para m
  
    if (!pesoNum || !alturaNum) {
      alert('Informe peso e altura válidos!');
      return;
    }
  
    const imc = pesoNum / (alturaNum * alturaNum);
    setImcResult(imc.toFixed(2));
  
    if (imc < 18.5) setEstado('Abaixo do peso');
    else if (imc < 25) setEstado('Peso normal');
    else if (imc < 30) setEstado('Sobrepeso');
    else setEstado('Obesidade');
  }  

  function limpar() {
    setPeso('');
    setAltura('');
    setImcResult('');
    setEstado('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewsInput}>
        <Text style={styles.titulo}>Calcule seu IMC</Text>
        <TextInput keyboardType="decimal-pad" style={styles.inputs} placeholder='Informe seu peso...' value={peso} onChangeText={setPeso} />
        <TextInput keyboardType="decimal-pad" style={styles.inputs} placeholder='Informe sua altura...' value={altura} onChangeText={setAltura} />
      </View>

      <View style={styles.viewBotoes}>
        <TouchableOpacity onPress={calcularIMC} style={styles.botaoEnviar}>
          <Text style={styles.textLimpar}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={limpar} style={styles.botaoLimpar}>
          <Text style={styles.textLimpar}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.viewResultados}>
        <Text>IMC: {imcResult}</Text>
        <Text>Estado: {estado}</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'start',
    marginTop: 20
  },
  titulo:{
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  inputs:{
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 10,
    paddingLeft: 15,
    paddingRigth: 15,
  },
  viewsInput:{
    width: '80%',
    height: '20%',
    justifyContent: 'space-evenly'
  },
  viewBotoes: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40
  },
  viewResultados:{

  },
  textLimpar: {
    color: '#ffffff',
    fontWeight: 'bold'
},
botaoLimpar: {
    marginTop: 20,
    backgroundColor: 'red',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 6,
},
botaoEnviar: {
  marginTop: 20,
  backgroundColor: 'violet',
  paddingVertical: 8,
  paddingHorizontal: 15,
  borderRadius: 6,
}
});
