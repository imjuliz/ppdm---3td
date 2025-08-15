import { StyleSheet, Image } from "react-native";

export const styles = StyleSheet.create({
container: {
    flex: 1

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
area1: {
    flex: 1
},
rosa: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#D2C98A',
    border: 1,
    borderColor: '#000000'
},
roxo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FD9584',
    borderColor: '1 gray',
    height: 150
},
azul: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#A66D45',
    borderColor: 'brown'
},
amarelo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6B6A7',
    borderColor: 'lightblue'
},
ciano: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3EAD6'
},
verde: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A7A155'
},
text: {
    color: '#000000',
    fontSize: 20
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
}
})