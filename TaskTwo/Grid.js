import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Grid = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.column, { backgroundColor: 'red' }]}>
          <Text style={styles.text}>A</Text>
        </View>
        <View style={[styles.column, { backgroundColor: 'green' }]}>
          <Text style={styles.text}>B</Text>
        </View>
        <View style={[styles.column, { backgroundColor: 'blue' }]}>
          <Text style={styles.text}>C</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={[styles.column, { backgroundColor: 'black' }]}>
          <Text style={styles.text}>D</Text>
        </View>
        <View style={[styles.column, { backgroundColor: 'orange' }]}>
          <Text style={styles.text}>E</Text>
        </View>
        <View style={[styles.column, { backgroundColor: 'purple' }]}>
          <Text style={styles.text}>F</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  column: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Grid;
