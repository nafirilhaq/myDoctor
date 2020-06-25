import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const Input = ({label, value, onChangeText, secureTextEntry}) => {
  const [border, setBorder] = useState(colors.border);
  const onFocusHandler = () => {
    setBorder(colors.borderActive);
  };
  const onBlurHandler = () => {
    setBorder(colors.border);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: border => ({
    borderWidth: 1,
    borderRadius: 10,
    borderColor: border,
    marginTop: 6,
    padding: 12,
  }),
  label: {
    fontSize: 16,
    color: colors.text.second,
    fontFamily: fonts[400],
  },
});
