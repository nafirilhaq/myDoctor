import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILPhotoNull, IconChevronRight} from '../../assets';
import {Gap, Header, List} from '../../components';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {Profile} from '../../components';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" />
      <View style={styles.content}>
        <Profile name="Jenit Anggiani" proffesion="Product Designer" />
        <Gap height={14} />
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('EditProfile')}>
          <List
            title="Edit Profile"
            desc="Last updated yesterday"
            icon="profile"
          />
          <IconChevronRight />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <List
            title="Language"
            desc="Available 12 languages"
            icon="language"
          />
          <IconChevronRight />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <List title="Give Us Rate" desc="On Google Play Store" icon="rate" />
          <IconChevronRight />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <List title="Help Center" desc="Read our guidelines" icon="help" />
          <IconChevronRight />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
});
