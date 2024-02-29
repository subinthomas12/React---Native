import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function FirstPage() {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('SecondPage', { data: 'By SUBIN' });
  };

  return (
    <View style={styles.container}>
      <Button
        title="Go to Second Page"
        onPress={() => navigation.navigate('SecondPage')}
        style={[styles.button, styles.secondaryButton]}
      />
      <View style={styles.buttonGap} />
      <Button
        title="Pass Data to Second Page"
        onPress={handleNavigate}
        style={[styles.button, styles.primaryButton]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '80%', 
    marginVertical: 10,
  },
  primaryButton: {
    backgroundColor: 'green',
  },
  secondaryButton: {
    backgroundColor: 'red',
  },
  buttonGap: {
    height: 20, 
  },
});

export default FirstPage;
