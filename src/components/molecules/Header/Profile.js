import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';
import Button from '../../atoms/Button';
import Gap from '../../atoms/Gap';
import {DummyDoctor} from '../../../assets';

const Profile = ({title, desc, onPress}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <Image source={DummyDoctor} style={styles.avatar} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 30,
    alignItems: 'center',
    backgroundColor: colors.background,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fonts[600],
    color: colors.white,
  },
  desc: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts[400],
    color: colors.text.tertiary,
    marginTop: 6,
  },
  avatar: {
    width: 46,
    height: 46,
  },
});
