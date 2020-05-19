import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Button = ({ title, type }) => {
  return (
    <View style={styles.container(type)}>
      <Text style={styles.text(type)}>{title}</Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
    borderRadius: 10
  }),
  text: type => ({
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    marginVertical: 10,
    color: type === 'secondary' ? '#112340' : 'white'
  })
})
