import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import Header from '../../components/molecules/Header';
import Gap from '../../components/atoms/Gap';
import {colors, useForm, storeData, getData} from '../../utils';
import {firebase} from '../../config';
import LoadingIndicator from '../../components/molecules/LoadingIndicator';
import {showMessage, hideMessage} from 'react-native-flash-message';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onClickContinue = () => {
    setLoading(true);

    firebase
      .auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(success => {
        setForm('reset');
        setLoading(false);
        const data = {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
          uid: success.user.uid,
        };

        firebase
          .database()
          .ref('users/' + success.user.uid + '/')
          .set(data);

        storeData('user', data);
        navigation.navigate('UploadPhoto', data);
      })
      .catch(error => {
        const errorMessage = error.code;
        let msgDisplay = error.message;
        if (errorMessage === 'auth/invalid-email') {
          msgDisplay = 'Maaf, format email salah.';
        }
        if (errorMessage === 'auth/email-already-in-use') {
          msgDisplay = 'Maaf, email sudah terdaftar pada aplikasi.';
        }
        if (errorMessage === 'auth/weak-password') {
          msgDisplay = 'Maaf, password harus lebih dari 6 karakter.';
        }

        setLoading(false);
        showMessage({
          message: msgDisplay,
          type: 'success',
          floating: true,
          backgroundColor: colors.warning,
          color: colors.white,
        });
      });
  };
  return (
    <>
      <View style={styles.page}>
        <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Gap height={10} />
            <Input
              label="Full Name"
              value={form.fullName}
              onChangeText={value => setForm('fullName', value)}
            />
            <Gap height={24} />
            <Input
              label="Pekerjaan"
              value={form.profession}
              onChangeText={value => setForm('profession', value)}
            />
            <Gap height={24} />
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
            <Gap height={40} />
            <Button title="Continue" onPress={onClickContinue} />
          </ScrollView>
        </View>
      </View>
      {loading && <LoadingIndicator />}
    </>
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
