import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment, incrementByAmount} from './counterSlice';

export default function Counter() {
  const count = useSelector(state => state.counter.count);
  const theme = useSelector(state => state.theme.themeColor);
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1}}>
      <Button
        style={styles.btn}
        title="Increase Counter"
        onPress={() => {
          dispatch(increment());
        }}
      />
      <Button
        style={styles.btn}
        title="Decrease Counter"
        onPress={() => {
          dispatch(decrement());
        }}
      />
      <Button
        style={styles.btn}
        title="Increment By 10"
        onPress={() => {
          dispatch(incrementByAmount(10));
        }}
      />
      <Text>Count: {count}</Text>
      <Text style={{color: theme}}>Theme: {theme}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: '20%',
    height: '20%',
  },
});
