import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

const Button = ({ title, type, onPress }) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'secondary' ? colors.button.background.second : colors.button.background.first,
    borderRadius: 10
  }),
  text: type => ({
    fontSize: 18,
    fontFamily: fonts.semiBold,
    textAlign: 'center',
    marginVertical: 10,
    color: type === 'secondary' ? colors.button.text.second : colors.button.text.first
  })
})
