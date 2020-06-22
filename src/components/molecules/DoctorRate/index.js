import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {IconStar, DummyDoctor} from '../../../assets';
import List from '../List';

const DoctorRate = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.component} onPress={onPress}>
      <View style={styles.profileWrapper}>
        <List title="Jenit Lutfianis" desc="Dentist" image={DummyDoctor} />
      </View>
      <IconStar />
      <IconStar />
      <IconStar />
      <IconStar />
      <IconStar />
    </TouchableOpacity>
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
