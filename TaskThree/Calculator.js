import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Calculator = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [operator, setOperator] = useState('+');

  const calculateResult = () => {
    let result;
    switch (operator) {
      case '+':
        result = parseFloat(number1) + parseFloat(number2);
        break;
      case '-':
        result = parseFloat(number1) - parseFloat(number2);
        break;
      case '*':
        result = parseFloat(number1) * parseFloat(number2);
        break;
      case '%':
        result = (parseFloat(number1) * parseFloat(number2)) / 100;
        break;
      default:
        result = 'Invalid operator';
    }
    Alert.alert('Result', `The result is: ${result}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter number 1"
        onChangeText={text => setNumber1(text)}
        keyboardType="numeric"
        value={number1}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter number 2"
        onChangeText={text => setNumber2(text)}
        keyboardType="numeric"
        value={number2}
      />
      <Picker
        selectedValue={operator}
        style={styles.dropdown}
        onValueChange={(itemValue, itemIndex) => setOperator(itemValue)}>
        <Picker.Item label="+" value="+" />
        <Picker.Item label="-" value="-" />
        <Picker.Item label="*" value="*" />
        <Picker.Item label="%" value="%" />
      </Picker>
      <Button title="Calculate" onPress={calculateResult} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  dropdown: {
    height: 50,
    width: '80%',
    marginBottom: 15,
  },
});

export default Calculator;
