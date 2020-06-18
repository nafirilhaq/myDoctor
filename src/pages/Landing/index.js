import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILBgLanding, ILLogo} from '../../assets';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

const Landing = ({navigation}) => {
  const handleGoto = screen => {
    navigation.navigate(screen);
  };

  return (
    <ImageBackground source={ILBgLanding} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button title="Get Started" onPress={() => handleGoto('SignUp')} />
        <Gap height={16} />
        <Button
          type="secondary"
          title="Sign In"
          onPress={() => handleGoto('SignIn')}
        />
      </View>
    </ImageBackground>
  );
};

export default Landing;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 40,
    justifyContent: 'space-between',
  },
  title: {
    maxWidth: 240,
    marginTop: 91,
    fontSize: 28,
    color: colors.white,
    fontFamily: fonts[600],
  },
});
