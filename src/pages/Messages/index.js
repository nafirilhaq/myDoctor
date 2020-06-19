import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {UserProfile} from '../../components';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

const Messages = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.header}>Messages</Text>
      <TouchableOpacity style={styles.item}>
        <UserProfile />
      </TouchableOpacity>
      <View style={styles.item}>
        <UserProfile />
      </View>
      <View style={styles.item}>
        <UserProfile />
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 16,
    paddingVertical: 30,
  },
  header: {
    fontSize: 20,
    fontFamily: fonts[600],
    color: colors.text.first,
  },
  item: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
});
