import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { ILSplash, ILBgLanding } from '../../assets'
import Button from '../../components/atoms/Button'
import Gap from '../../components/atoms/Gap'

const Landing = () => {
  return (
    <ImageBackground source={ILBgLanding} style={styles.page}>
      <View>
        <ILSplash />
        <Text style={styles.title}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
      </View>
      <View>
        <Button title="Get Started" />
        <Gap height={16} />
        <Button type="secondary" title="Sign In" />
      </View>
    </ImageBackground>
  )
}

export default Landing

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 40,
    justifyContent: 'space-between'
  },
  title: {
    maxWidth: 240,
    marginTop: 91,
    fontSize: 28,
    color: 'white',
    fontFamily: 'Nunito-SemiBold'
  },
})
