import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconDoctor,
  IconDoctorActive,
  IconHospitals,
  IconHospitalsActive,
  IconMessages,
  IconMessagesActive,
} from '../../../assets';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const TabItem = ({title, onPress, isActive}) => {
  const Icon = () => {
    if (title === 'Doctor') {
      return isActive ? <IconDoctorActive /> : <IconDoctor />;
    }
    if (title === 'Messages') {
      return isActive ? <IconMessagesActive /> : <IconMessages />;
    }
    if (title === 'Hospitals') {
      return isActive ? <IconHospitalsActive /> : <IconHospitals />;
    }
    return <IconDoctor />;
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.component}>
      <Icon />
      <Text style={styles.text(isActive)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  component: {
    flex: 1,
    alignItems: 'center',
  },
  text: isActive => ({
    marginTop: 4,
    fontSize: 10,
    fontFamily: fonts[600],
    color: isActive ? colors.text.menuActive : colors.text.menuInactive,
  }),
});
