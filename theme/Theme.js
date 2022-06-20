import React, {useState} from 'react';
import {View, Button, TextInput, StyleSheet, Text} from 'react-native';
import {changeColor} from './themeSlice';
import {useDispatch} from 'react-redux';

export default function Counter() {
  const [color, setColor] = useState('');
  const dispatch = useDispatch();

  const txtHandler = c => {
    setColor(c);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter your color"
        value={color}
        onChangeText={txtHandler}
      />
      <Button
        title="On click color change"
        onPress={() => {
          dispatch(changeColor(color));
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
