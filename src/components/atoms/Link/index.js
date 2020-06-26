import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {fonts} from '../../../utils/fonts';
import {colors} from '../../../utils/colors';

const Link = ({title, fontSize, align, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.title(fontSize, align)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  title: (fontSize, align) => ({
    fontSize: fontSize,
    textDecorationLine: 'underline',
    fontFamily: fonts[400],
    color: colors.text.second,
    textAlign: align,
  }),
});
