import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyHospital} from '../../../assets';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const HospitalList = () => {
  return (
    <View style={styles.component}>
      <Image source={DummyHospital} style={styles.image} />
      <View>
        <Text style={styles.hospitalName}>Rumah Sakit</Text>
        <Text style={styles.hospitalName}>Borromeus</Text>
        <Text style={styles.address}>Jl. Ir. H. Djuanda Bandung</Text>
      </View>
    </View>
  );
};

export default HospitalList;

const styles = StyleSheet.create({
  component: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 60,
    marginRight: 16,
  },
  hospitalName: {
    fontSize: 16,
    fontFamily: fonts[400],
    color: colors.text.first,
  },
  address: {
    fontSize: 12,
    fontFamily: fonts[400],
    color: colors.text.second,
    marginTop: 4,
  },
});
