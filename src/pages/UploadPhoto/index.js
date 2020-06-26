import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Header, Button, Link, Gap} from '../../components';
import {IconAddPhoto, ILPhotoNull, IconRemovePhoto} from '../../assets';
import {colors, fonts, storeData} from '../../utils';
import ImagePicker from 'react-native-image-picker';
import {firebase} from '../../config';

const UploadPhoto = ({navigation, route}) => {
  const {fullName, profession, uid} = route.params;
  const [imageDB, setImageDB] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [image, setImage] = useState(ILPhotoNull);

  const getImage = () => {
    ImagePicker.launchImageLibrary({}, response => {
      if (response.didCancel || response.error) {
      } else {
        const source = {uri: response.uri};
        setImageDB(`data:${response.type};base64, ${response.data}`);
        setImage(source);
        setHasPhoto(true);
      }
    });
  };

  const removeImage = () => {
    setImage(ILPhotoNull);
    setHasPhoto(false);
  };

  const uploadHandler = () => {
    firebase
      .database()
      .ref('users/' + uid + '/')
      .update({photo: imageDB});

    const data = route.params;
    data.photo = imageDB;
    storeData('user', data);

    navigation.replace('MainApp');
  };

  const skipHandler = () => {
    const data = route.params;
    storeData('user', data);

    navigation.replace('MainApp');
  };

  return (
    <View style={styles.page}>
      <Header
        title="Upload Photo"
        onPress={() => navigation.navigate('Landing')}
      />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={image} style={styles.avatar} />
            {hasPhoto && (
              <TouchableOpacity style={styles.avatarIcon} onPress={removeImage}>
                <IconRemovePhoto />
              </TouchableOpacity>
            )}
            {!hasPhoto && (
              <TouchableOpacity style={styles.avatarIcon} onPress={getImage}>
                <IconAddPhoto />
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.proffesion}>{profession}</Text>
        </View>
        <View>
          <Button
            title="Upload and Continue"
            isDisable={!hasPhoto}
            onPress={uploadHandler}
          />
          <Gap height={30} />
          <Link
            title="Skip for this"
            fontSize={16}
            align="center"
            onPress={skipHandler}
          />
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
    borderRadius: 110 / 2,
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
