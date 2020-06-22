import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyUser} from '../../../assets';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const Profile = ({name, proffesion}) => {
  return (
    <View style={styles.profile}>
      <View style={styles.avatarWrapper}>
        <Image source={DummyUser} style={styles.avatar} />
      </View>
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.proffesion}>{proffesion}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderRadius: 130 / 2,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
  },
  avatarIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  name: {
    marginTop: 26,
    marginBottom: 4,
    fontSize: 24,
    fontFamily: fonts[600],
    color: colors.text.first,
    textAlign: 'center',
  },
  proffesion: {
    fontSize: 18,
    fontFamily: fonts[400],
    color: colors.text.second,
    textAlign: 'center',
  },
});
