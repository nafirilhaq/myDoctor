import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DummyDoctor} from '../../assets';
import {List} from '../../components';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

const Messages = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.header}>Messages</Text>
        <TouchableOpacity style={styles.item}>
          <List title="Jenit Lutfianis" desc="Dentist" image={DummyDoctor} />
        </TouchableOpacity>
        <View style={styles.item}>
          <List title="Jenit Lutfianis" desc="Dentist" image={DummyDoctor} />
        </View>
        <View style={styles.item}>
          <List title="Jenit Lutfianis" desc="Dentist" image={DummyDoctor} />
        </View>
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.background,
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
