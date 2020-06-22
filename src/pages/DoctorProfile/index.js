import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Profile, ProfileItem, Gap, Button} from '../../components';
import {colors} from '../../utils/colors';

const DoctorProfile = () => {
  return (
    <View style={styles.page}>
      <Header title="Profile" />
      <Profile name="Jenit Lutfiani Anggianis" proffesion="Dokter Anak" />
      <Gap height={26} />
      <ProfileItem label="Alumnus" value="Universitas Indonesia" />
      <ProfileItem label="Tempat Praktek" value="Rumah Sakit Borromeus" />
      <ProfileItem label="No. STR" value="0000116622081996" />
      <Gap height={23} />
      <View style={styles.buttonWrapper}>
        <Button title="Start Consultation" />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  buttonWrapper: {
    paddingHorizontal: 40,
  },
});
