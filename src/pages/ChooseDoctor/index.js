import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, UserProfile} from '../../components';
import {colors} from '../../utils/colors';
import {IconChevronRight} from '../../assets';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter Anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <View style={styles.item}>
          <UserProfile />
          <IconChevronRight />
        </View>
        <View style={styles.item}>
          <UserProfile />
          <IconChevronRight />
        </View>
        <View style={styles.item}>
          <UserProfile />
          <IconChevronRight />
        </View>
        <View style={styles.item}>
          <UserProfile />
          <IconChevronRight />
        </View>
        <View style={styles.item}>
          <UserProfile />
          <IconChevronRight />
        </View>
      </View>
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
});
