import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IconBackDark} from '../../../assets/icon';

const IconOnly = ({icon, onPress}) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <IconBackDark />;
    }
    return <IconBackDark />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;

const styles = StyleSheet.create({});
