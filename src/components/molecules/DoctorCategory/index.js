import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconHospitalsActive, IconDokterUmum} from '../../../assets';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const DoctorCategory = () => {
  return (
    <View style={styles.component}>
      <IconDokterUmum />
      <Text style={styles.text}>Saya butuh</Text>
      <Text style={styles.category}>dokter umum</Text>
    </View>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  component: {
    width: 100,
    height: 130,
    padding: 12,
    backgroundColor: colors.doctorCard,
    marginRight: 10,
    borderRadius: 10,
  },
  text: {
    marginTop: 28,
    fontSize: 12,
    fontFamily: fonts[300],
    color: colors.text.first,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts[600],
    color: colors.text.first,
  },
});