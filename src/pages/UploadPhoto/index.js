import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Header, Button, Link, Gap} from '../../components';
import {IconAddPhoto, ILPhotoNull} from '../../assets';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Upload Photo"
        onPress={() => navigation.navigate('Landing')}
      />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILPhotoNull} style={styles.avatar} />
            <IconAddPhoto style={styles.avatarIcon} />
          </View>
          <Text style={styles.name}>Jenit Luthfianis</Text>
          <Text style={styles.proffesion}>Product Designer</Text>
        </View>
        <View>
          <Button title="Upload and Continue" />
          <Gap height={30} />
          <Link title="Skip for this" fontSize={16} align="center" />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 40,
    paddingBottom: 64,
  },
  profile: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
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
  },
  proffesion: {
    fontSize: 18,
    fontFamily: fonts[400],
    color: colors.text.second,
  },
});
