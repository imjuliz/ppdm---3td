import { styles } from './styles.js'
import { Text, View, Image } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.container2}>
      <View style={styles.area1}>
        <Image source={require('./assets/img/gato1.png')} style={{ width: '80%', height: 200 }}/>
      </View>
      <View style={styles.area2}>
      <Image source={require('./assets/img/gato2.png')} style={{ width: '80%', height: 200 }}/>
      </View>
      </View>

      <View style={styles.container2}>
      <View style={styles.area3}>
        <Image source={require('./assets/img/gato3.png')} style={{ width: '80%', height: 200 }}/>
        </View>
      <View style={styles.area4}>
      <Image source={require('./assets/img/gato4.png')} style={{ width: '80%', height: 200 }}/>
      </View>
      </View>

      <View style={styles.container2}>
      <View style={styles.area5}>
      <Image source={require('./assets/img/cachorro5.png')} style={{ width: '80%', height: 200 }}/>
      </View>
      <View style={styles.area6}>
      <Image source={require('./assets/img/cachorro6.png')} style={{ width: '80%', height: 200 }}/>
      </View>
    </View>

    </View>
  );
}