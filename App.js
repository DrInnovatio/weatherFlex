import React from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.redView}/>
      <View style={styles.yellowView}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  redView: {
    height: 50,
    width: 50,
    backgroundColor: 'red'
  },
  yellowView: {
    height: 50,
    width: 50,
    backgroundColor: 'yellow'
  }
});
