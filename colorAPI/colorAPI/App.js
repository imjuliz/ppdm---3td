import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [corSelecionada, setCorSelecionada] = useState('');
  const [nomeCor, setNomeCor] = useState(''); // armazena o nome da cor da API

  function botao(corFundo) {
    setCorSelecionada(corFundo);
  }

  function limpar() {
    setforma(' ')
  }

  const forma1 = 'D2C98A';
  const forma2 = 'FD9584';
  const forma3 = 'A66D45';
  const forma4 = 'F6B6A7';
  const forma5 = 'F3EAD6';
  const forma6 = 'A7A155';

  useEffect(() => {
    if (!corSelecionada) return;

    const buscarCor = async () => {
      try {
        const response = await fetch(`https://www.thecolorapi.com/id?hex=${corSelecionada}`);
        const data = await response.json();
        setNomeCor(data.name.value); // atualiza o nome da cor
      } catch (error) {
        console.error('Erro ao buscar cor:', error);
      }
    };

    buscarCor();
  }, [corSelecionada]);

  return (
    <View style={styles.container}>
      <View style={styles.linha}>
        <TouchableOpacity style={styles.cor1} onPress={() => botao(forma1)} />
        <TouchableOpacity style={styles.cor2} onPress={() => botao(forma2)} />
      </View>

      <View style={styles.linha}>
        <TouchableOpacity style={styles.cor3} onPress={() => botao(forma3)} />
        <TouchableOpacity style={styles.cor4} onPress={() => botao(forma4)} />
      </View>

      <View style={styles.linha}>
        <TouchableOpacity style={styles.cor5} onPress={() => botao(forma5)} />
        <TouchableOpacity style={styles.cor6} onPress={() => botao(forma6)} />
      </View>

      <View style={styles.linha}>
        <TouchableOpacity style={styles.cor7} onPress={() => botao(forma1)} />
        <TouchableOpacity style={styles.cor8} onPress={() => botao(forma2)} />
      </View>

      <View style={styles.linha}>
        <TouchableOpacity style={styles.cor9} onPress={() => botao(forma3)} />
        <TouchableOpacity style={styles.cor10} onPress={() => botao(forma4)} />
      </View>

      <View style={styles.linha}>
        <TouchableOpacity style={styles.cor11} onPress={() => botao(forma5)} />
        <TouchableOpacity style={styles.cor12} onPress={() => botao(forma6)} />
      </View>

      <View style={styles.linha2}>
        <Text style={styles.text}>Cor: {nomeCor}</Text>
        <TouchableOpacity onPress={() => limpar(corSelecionada)} style={styles.botaoLimpar}><Text style={styles.textLimpar}>Limpar</Text></TouchableOpacity>
      </View>
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
  linha: {
    flex: 1,
    flexDirection: 'row'
  },
  linha2: {
    flex: 1,
    flexDirection: 'col',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cor1: {
    backgroundColor: '#DA291C',
    flex: 2
  },
  cor2: {
    backgroundColor: '#FD9584',
    flex: 2
  },
  cor3: {
    backgroundColor: '#A66D45',
    flex: 2
  },
  cor4: {
    backgroundColor: '#F6B6A7',
    flex: 2
  },
  cor5: {
    backgroundColor: '#F3EAD6',
    flex: 2
  },
  cor6: {
    backgroundColor: '#A7A155',
    flex: 2
  },
  cor7: {
    backgroundColor: '#DA291C',
    flex: 2
  },
  cor8: {
    backgroundColor: '#FD9584',
    flex: 2
  },
  cor9: {
    backgroundColor: '#A66D45',
    flex: 2
  },
  cor10: {
    backgroundColor: '#F6B6A7',
    flex: 2
  },
  cor11: {
    backgroundColor: '#F3EAD6',
    flex: 2
  },
  cor12: {
    backgroundColor: '#A7A155',
    flex: 2
  },
});

