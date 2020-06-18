import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyUser} from '../../../assets';
import {fonts} from '../../../utils/fonts';
import {colors} from '../../../utils/colors';

const UserProfile = () => {
  return (
    <View style={styles.component}>
      <Image source={DummyUser} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Jenit Luthfi</Text>
        <Text style={styles.proffesion}>Product Designer</Text>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  component: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts[600],
    color: colors.text.first,
  },
  proffesion: {
    fontSize: 12,
    fontFamily: fonts[400],
    color: colors.text.second,
  },
});
