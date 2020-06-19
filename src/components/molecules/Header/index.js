import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../../utils/fonts';
import Button from '../../atoms/Button';
import Gap from '../../atoms/Gap';
import {colors} from '../../../utils/colors';

const Header = ({onPress, title, type}) => {
  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.title(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: type => ({
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingVertical: 30,
    alignItems: 'center',
    backgroundColor: type === 'dark' ? colors.background : colors.white,
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  title: type => ({
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    fontFamily: fonts[600],
    color: type === 'dark' ? colors.white : colors.text.first,
  }),
});
