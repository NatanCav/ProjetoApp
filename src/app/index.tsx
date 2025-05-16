import { View, Text, StyleSheet, Alert, Button } from 'react-native'

export default function Index() {
    function handleMessage(){
        return Alert.alert("Olá Fulano!")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Hello React Native!
            </Text>
            <Button title="Enviar" onPress={handleMessage}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 90,
        justifyContent: 'center',
    },

    title: {
        color: "#453269",
        fontSize: 26,
        fontWeight: "bold",
    },


})