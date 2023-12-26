import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PantallaCalculadora = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);

  const handleOperation = (operation) => {
    switch (operation) {
      case 'add':
        setResult(parseFloat(num1) + parseFloat(num2));
        break;
      case 'subtract':
        setResult(parseFloat(num1) - parseFloat(num2));
        break;
      case 'multiply':
        setResult(parseFloat(num1) * parseFloat(num2));
        break;
      case 'divide':
        setResult(parseFloat(num1) / parseFloat(num2));
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el primer numero"
        keyboardType="numeric"
        value={num1}
        onChangeText={(text) => setNum1(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese el segundo numero"
        keyboardType="numeric"
        value={num2}
        onChangeText={(text) => setNum2(text)}
      />
      <View style={styles.buttonContainer}>
        <Button title="Sumar" onPress={() => handleOperation('add')} />
        <Button title="Restar" onPress={() => handleOperation('subtract')} />
        <Button title="Multiplicar" onPress={() => handleOperation('multiply')} />
        <Button title="Dividir" onPress={() => handleOperation('divide')} />
      </View>
      <Text style={styles.result}>Resultado: {result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      width: '100%',
      padding: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: 20,
    },
    result: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

export default PantallaCalculadora;