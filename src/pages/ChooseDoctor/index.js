import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Header, List} from '../../components';
import {colors} from '../../utils/colors';
import {IconChevronRight, DummyDoctor} from '../../assets';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter Anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Chat')}>
          <List title="Jenit Lutfianis" desc="Dentist" image={DummyDoctor} />
          <IconChevronRight />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Chat')}>
          <List title="Jenit Lutfianis" desc="Dentist" image={DummyDoctor} />
          <IconChevronRight />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Chat')}>
          <List title="Jenit Lutfianis" desc="Dentist" image={DummyDoctor} />
          <IconChevronRight />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Chat')}>
          <List title="Jenit Lutfianis" desc="Dentist" image={DummyDoctor} />
          <IconChevronRight />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Chat')}>
          <List title="Jenit Lutfianis" desc="Dentist" image={DummyDoctor} />
          <IconChevronRight />
        </TouchableOpacity>
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
