import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Input, Gap, Link, Button} from '../../components';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';

const SignIn = () => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Forgot My Password" fontSize={12} />
      <Gap height={40} />
      <Button title="Sign In" />
      <Gap height={30} />
      <Link title="Create New Account" fontSize={16} align="center" />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 40,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    color: colors.text.first,
    maxWidth: 155,
    marginVertical: 40,
    fontFamily: fonts[600],
  },
});
