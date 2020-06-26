import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Input, Gap, Link, Button, LoadingIndicator} from '../../components';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';
import {ScrollView} from 'react-native-gesture-handler';
import {useForm, storeData} from '../../utils';
import {firebase} from '../../config';
import {showMessage} from 'react-native-flash-message';

const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const loginHandler = () => {
    setLoading(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(success => {
        setLoading(false);

        firebase
          .database()
          .ref(`users/${success.user.uid}/`)
          .once('value')
          .then(res => {
            if (res.val()) {
              storeData('user', res);
              navigation.replace('MainApp');
            }
          });
      })
      .catch(error => {
        const errorMessage = error.code;
        let msgDisplay = error.message;
        if (errorMessage === 'auth/invalid-email') {
          msgDisplay = 'Maaf, format email salah.';
        }
        if (errorMessage === 'auth/user-not-found') {
          msgDisplay = 'Maaf, email tidak terdaftar.';
        }
        if (errorMessage === 'auth/wrong-password') {
          msgDisplay = 'Maaf, password salah.';
        }

        setLoading(false);
        showMessage({
          message: msgDisplay,
          type: 'success',
          floating: true,
          backgroundColor: colors.warning,
          color: colors.white,
        });
        console.log(error);
      });
  };

  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ILLogo />
          <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
          <Input
            label="Email Address"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={10} />
          <Link title="Forgot My Password" fontSize={12} />
          <Gap height={40} />
          <Button title="Sign In" onPress={loginHandler} />
          <Gap height={30} />
          <Link title="Create New Account" fontSize={16} align="center" />
        </ScrollView>
      </View>
      {loading && <LoadingIndicator />}
    </>
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
