import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../../utils/fonts';
import Button from '../../atoms/Button';
import Gap from '../../atoms/Gap';

const Header = ({onPress, title}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-dark" onPress={onPress} />
      <Text style={styles.title}>{title}</Text>
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
    fontFamily: fonts[600],
  },
});
