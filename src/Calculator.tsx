/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CalculatorApp = () => {
  const [input, setInput] = useState('');

  const handleButtonPress = value => {
    setInput(prevInput => prevInput + value);
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{input}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('7')}>
            <View style={styles.wrapButtonText}>
              <Text style={styles.buttonText}>7</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('8')}>
            <View style={styles.wrapButtonText}>
              <Text style={styles.buttonText}>8</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('9')}>
            <View style={styles.wrapButtonText}>
              <Text style={styles.buttonText}>9</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('/')}>
            <View
              style={{...styles.wrapButtonText, backgroundColor: '#e69c21'}}>
              <Text style={styles.buttonText}>/</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('4')}>
            <View style={styles.wrapButtonText}>
              <Text style={styles.buttonText}>4</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('5')}>
            <View style={styles.wrapButtonText}>
              <Text style={styles.buttonText}>5</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('6')}>
            <View style={styles.wrapButtonText}>
              <Text style={styles.buttonText}>6</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('*')}>
            <View
              style={{...styles.wrapButtonText, backgroundColor: '#e69c21'}}>
              <Text style={styles.buttonText}>*</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('1')}>
            <View style={styles.wrapButtonText}>
              <Text style={styles.buttonText}>1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('2')}>
            <View style={styles.wrapButtonText}>
              <Text style={styles.buttonText}>2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('3')}>
            <View style={styles.wrapButtonText}>
              <Text style={styles.buttonText}>3</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('-')}>
            <View
              style={{...styles.wrapButtonText, backgroundColor: '#e69c21'}}>
              <Text style={styles.buttonText}>-</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('0')}>
            <View style={styles.wrapButtonText}>
              <Text style={styles.buttonText}>0</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleClear()}>
            <View style={styles.wrapButtonText}>
              <Text style={styles.buttonText}>AC</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleEqual}>
            <View style={styles.wrapButtonText}>
              <Text style={styles.buttonText}>=</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('+')}>
            <View
              style={{...styles.wrapButtonText, backgroundColor: '#e69c21'}}>
              <Text style={styles.buttonText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    width: '100%',
  },
  display: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  displayText: {
    fontSize: 45,
    color: '#fff',
    fontWeight: '500',
  },
  buttons: {
    flex: 5,
    backgroundColor: '#000',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 45,
    color: '#fff',
    fontWeight: '500',
  },
  wrapButtonText: {
    backgroundColor: '#a6a8a9',
    width: 90,
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 100,
    height: 90,
    justifyContent: 'center',
  },
  clearButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a6a8a9',
    width: 90,
    textAlign: 'center',
    borderRadius: 100,
    height: 90,
  },
  clearButtonText: {
    fontSize: 30,
    color: '#fff',
  },
});

export default CalculatorApp;
