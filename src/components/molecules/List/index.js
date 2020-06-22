import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';
import {
  IconProfileMenu,
  IconLanguageMenu,
  IconRateMenu,
  IconHelpMenu,
} from '../../../assets';

const List = ({title, desc, image, icon}) => {
  const Icon = () => {
    if (icon === 'profile') {
      return <IconProfileMenu />;
    }
    if (icon === 'language') {
      return <IconLanguageMenu />;
    }
    if (icon === 'rate') {
      return <IconRateMenu />;
    }
    if (icon === 'help') {
      return <IconHelpMenu />;
    }
  };
  return (
    <View style={styles.component}>
      {icon ? <Icon /> : <Image source={image} style={styles.avatar} />}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  component: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
  },
  content: {
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts[600],
    color: colors.text.first,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts[400],
    color: colors.text.second,
  },
});
