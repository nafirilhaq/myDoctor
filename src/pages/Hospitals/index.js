import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILHospitalBG} from '../../assets';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';
import {HospitalList} from '../../components';

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.header}>Nearby Hospitals</Text>
        <Text style={styles.available}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <HospitalList />
        <HospitalList />
        <HospitalList />
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  header: {
    fontSize: 20,
    fontFamily: fonts[600],
    color: colors.white,
    textAlign: 'center',
  },
  available: {
    fontSize: 14,
    fontFamily: fonts[300],
    color: colors.white,
    textAlign: 'center',
    marginTop: 6,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: -20,
    paddingTop: 4,
  },
});
