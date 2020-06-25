import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {colors, fonts} from '../../../utils';

const LoadingIndicator = () => {
  return (
    <View style={styles.component}>
      <ActivityIndicator size="large" color={colors.green} />
      <Text style={styles.text}>Loading</Text>
    </View>
  );
};

export default LoadingIndicator;

const styles = StyleSheet.create({
  component: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: colors.loadingBackground,
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: fonts[400],
    color: colors.green,
  },
});
