import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const FromMe = () => {
  return (
    <View style={styles.component}>
      <Text style={styles.message}>
        Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
      </Text>
      <Text style={styles.date}>4.20 AM</Text>
    </View>
  );
};

export default FromMe;

const styles = StyleSheet.create({
  component: {
    alignItems: 'flex-end',
  },
  message: {
    backgroundColor: colors.card,
    padding: 12,
    marginTop: 20,
    maxWidth: '65%',
    fontSize: 14,
    fontFamily: fonts[400],
    color: colors.text.first,
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  date: {
    marginTop: 8,
    fontSize: 11,
    fontFamily: fonts[400],
    color: colors.text.second,
  },
});
