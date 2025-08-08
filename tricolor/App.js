import { StyleSheet, Text, View } from 'react-native';
import { styles } from './styles.js'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerRoxo}>
      <Text style={styles.textos}>Container Roxo</Text>
      </View>
      <View style={styles.containerRosa}>
      <Text style={styles.textos}>Container Rosa</Text>
      </View>
      <View style={styles.containerAzul}>
      <Text style={styles.textos}>Container Azul</Text>
      </View>
    </View>
  );
}