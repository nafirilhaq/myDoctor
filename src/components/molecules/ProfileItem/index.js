import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../../utils/fonts';
import {colors} from '../../../utils/colors';

const ProfileItem = ({label, value}) => {
  return (
    <View style={styles.component}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  component: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts[400],
    color: colors.text.second,
  },
  value: {
    fontSize: 14,
    fontFamily: fonts[400],
    color: colors.text.first,
  },
});
