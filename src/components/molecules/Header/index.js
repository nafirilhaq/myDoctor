import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconBackDark} from '../../../assets/icon';
import Gap from '../../atoms/Gap';

const Header = () => {
  return (
    <View style={styles.container}>
      <IconBackDark />
      <Text style={styles.title}>Header Text</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingTop: 30,
    paddingBottom: 40,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
  },
});
