import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {DummyNews} from '../../../assets';
import {fonts} from '../../../utils/fonts';
import {colors} from '../../../utils/colors';

const NewsSection = () => {
  return (
    <View style={styles.component}>
      <View style={styles.titleWrapper}>
        <Text style={styles.news}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Text style={styles.date}>Today</Text>
      </View>
      <Image source={DummyNews} style={styles.image} />
    </View>
  );
};

export default NewsSection;

const styles = StyleSheet.create({
  component: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 12,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingHorizontal: 16,
  },
  titleWrapper: {
    flex: 1,
  },
  news: {
    fontSize: 16,
    fontFamily: fonts[600],
    color: colors.text.first,
    maxWidth: '80%',
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    fontFamily: fonts[400],
    color: colors.text.second,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 10,
  },
});
