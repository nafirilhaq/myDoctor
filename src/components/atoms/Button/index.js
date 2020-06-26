import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';
import IconOnly from './IconOnly';

const Button = ({title, type, icon, onPress, isDisable}) => {
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (isDisable) {
    return (
      <View style={styles.disableContainer}>
        <Text style={styles.disableText}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    borderRadius: 10,
  }),
  disableContainer: {
    borderRadius: 10,
    backgroundColor: colors.button.disable.background,
  },
  text: type => ({
    fontSize: 18,
    fontFamily: fonts[600],
    textAlign: 'center',
    marginVertical: 10,
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
  }),
  disableText: {
    fontSize: 18,
    fontFamily: fonts[600],
    textAlign: 'center',
    marginVertical: 10,
    color: colors.button.disable.text,
  },
});
