import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';
import {DummyDoctor} from '../../../assets';

const FromOther = () => {
  return (
    <View style={styles.component}>
      <Image source={DummyDoctor} style={styles.avatar} />
      <View>
        <Text style={styles.message}>
          Oh tentu saja tidak karena jeruk itu sangat sehat...
        </Text>
        <Text style={styles.date}>4.20 AM</Text>
      </View>
    </View>
  );
};

export default FromOther;

const styles = StyleSheet.create({
  component: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  avatar: {
    width: 30,
    height: 30,
    marginRight: 12,
  },
  message: {
    backgroundColor: colors.card2,
    padding: 12,
    marginTop: 20,
    maxWidth: '80%',
    fontSize: 14,
    fontFamily: fonts[400],
    color: colors.white,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  date: {
    marginTop: 8,
    fontSize: 11,
    fontFamily: fonts[400],
    color: colors.text.second,
  },
});
