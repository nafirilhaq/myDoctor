import React, {version} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconSend, IconSendActive} from '../../../assets';
import {colors} from '../../../utils/colors';

const ButtonSend = ({isDisable}) => {
  if (isDisable) {
    return (
      <View style={styles.container(isDisable)}>
        <IconSend />
      </View>
    );
  }
  return (
    <View style={styles.container(isDisable)}>
      <IconSendActive />
    </View>
  );
};

export default ButtonSend;

const styles = StyleSheet.create({
  container: isDisable => ({
    backgroundColor: isDisable
      ? colors.textInput.background
      : colors.textInput.backgroundActive,
    width: 45,
    height: 45,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
    borderRadius: 10,
  }),
});
