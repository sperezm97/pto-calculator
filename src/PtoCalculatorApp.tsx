import { Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export const PtoCalculatorApp = () => {
    const [input, setInput] = useState('')
    const [results, setResults] = useState(0)
    const [selected, setSelected] = useState('años')

    const calculatePToDays = () => {
        let result = 0;
        const parsedInput = +input
        switch (selected) {
            case "años":
                result = parsedInput > 5 ? 18: 14
            case "meses":
                if (parsedInput >= 12) {
                    result = 14
                } else if (parsedInput >= 11) {
                    result = 12
                } else if (parsedInput >= 10) {
                    result = 11
                } else if (parsedInput >= 9) {
                    result = 10
                } else if (parsedInput >= 7) {
                    result = 8
                } else if (parsedInput >= 6) {
                    result = 7
                } else if (parsedInput >= 5) {
                    result = 6
                }
            default:
                break;
        }

        setResults(result)
    }

    const toggleSwitch = () => {
        setSelected(p =>  p === "años" ? "meses": "años")
        setInput('')
    }

  return (
    <View>
        <Text>PtoCalculatorApp</Text>
        <View style={styles.container}>
            <View>
                <Text>Calculo de tiempo de vacaciones en República Dominicana</Text>
            </View>
            <View style={[styles.containerInput, {padding: 20, }]}>
                <Text>Ingrese la cantidad de tiempo que lleva trabajando.</Text>

                <View style={styles.selectContainer}>
                    <Text>Años</Text>
                    <Switch 
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={selected=== 'years' ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={selected === 'years'}
                    />
                    <Text>Meses</Text>
                </View>

                <View style={[styles.containerInput, {}]}>
                    <Text>Cantidad en {selected}</Text>
                    <TextInput value={input} onChangeText={setInput}  placeholder={`cantidad de ${selected}`}/>
                </View>

            </View>

            <View>
                <Button title='Calcular' onPress={calculatePToDays}/>
            </View>
            {results > 0 && (
                <View style={styles.resultsContainer}>
                    <Text>Tienes {results} dias de vacaciones</Text>
                </View>
            )}
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerInput:{
        padding: 12,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        marginVertical: 20,
    },
    resultsContainer: {
        marginTop: 12,

    },
    selectContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems:'center',
        marginTop: 12,

    },
    input:{
        marginVertical: 8,

    }
    
})