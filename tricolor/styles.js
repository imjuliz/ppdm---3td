import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    containerRoxo: {
        backgroundColor: 'violet',
        flex: 2,
        justifyContent: 'center'
    },
    containerRosa: {
        backgroundColor: 'pink',
        flex: 1,
        justifyContent: 'center'
    },
    containerAzul: {
        backgroundColor: 'lightblue',
        flex: 4,
        justifyContent: 'center'
    },
    textos: {
        fontWeight: 700,
        fontSize: 28,
        color: 'gray',
        textAlign: 'center'
    }
});