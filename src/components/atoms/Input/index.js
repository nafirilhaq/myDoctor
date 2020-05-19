import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

const Input = ({ label }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.border,
    marginTop: 6,
    padding: 12
  },
  label: {
    fontSize: 16,
    color: colors.text.second,
    fontFamily: fonts.regular
  }
})
