import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IconBackDark, IconBackLight} from '../../../assets/icon';

const IconOnly = ({icon, onPress}) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <IconBackDark />;
    }
    if (icon === 'back-light') {
      return <IconBackLight />;
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
