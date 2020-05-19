import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ILSplash } from '../../assets';

const Splash = () => {
  return (
    <View style={styles.page}>
      <ILSplash />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: '#112340'
  }
})
