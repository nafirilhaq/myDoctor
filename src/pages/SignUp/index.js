import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import Header from '../../components/molecules/Header';
import Gap from '../../components/atoms/Gap';
import {colors} from '../../utils/colors';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
      <View style={styles.container}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button
          title="Continue"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    paddingHorizontal: 40,
    backgroundColor: colors.white,
  },
});

export default SignUp;
