import { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles.js';

export default function App() {
  const [forma, setforma] = useState('');

  function botao(corFundo) {
    setforma(corFundo);
  }

  function limpar(){
    setforma(' ')
  }

  const forma1 = 'borderRadius: 10,\nbackgroundColor: #D2C98A,\nborderColor: #000000';
  const forma2 = 'backgroundColor: #FD9584,\nheight: 150';
  const forma3 = 'borderRadius: 50,\nbackgroundColor: #A66D45';
  const forma4 = 'backgroundColor: #F6B6A7';
  const forma5 = 'backgroundColor: #F3EAD6';
  const forma6 = 'backgroundColor: #A7A155';

  return (
    <View style={styles.container}>
      <View style={styles.linha}>
        <TouchableOpacity style={styles.rosa} onPress={() => botao(forma1)} />
        <TouchableOpacity style={styles.roxo} onPress={() => botao(forma2)} />
      </View>

      <View style={styles.linha}>
        <TouchableOpacity style={styles.azul} onPress={() => botao(forma3)} />
        <TouchableOpacity style={styles.amarelo} onPress={() => botao(forma4)} />
      </View>

      <View style={styles.linha2}>
        <Text style={styles.text}>{forma}</Text>
        <TouchableOpacity onPress={() => limpar(forma)} style={styles.botaoLimpar}><Text style={styles.textLimpar}>Limpar</Text></TouchableOpacity>
      </View>
    </View>
  );
}
