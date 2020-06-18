import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import UserProfile from '../UserProfile';
import {IconStar} from '../../../assets';
import {Gap} from '../../atoms';

const DoctorRate = () => {
  return (
    <View style={styles.component}>
      <View style={styles.profileWrapper}>
        <UserProfile />
      </View>
      <IconStar />
      <IconStar />
      <IconStar />
      <IconStar />
      <IconStar />
    </View>
  );
};

export default DoctorRate;

const styles = StyleSheet.create({
  component: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileWrapper: {
    flex: 1,
  },
});
