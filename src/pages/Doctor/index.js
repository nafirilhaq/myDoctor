import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  UserProfile,
  DoctorCategory,
  DoctorRate,
  NewsSection,
  Gap,
} from '../../components';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';

const Doctor = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={32} />
          <UserProfile />
          <Text style={styles.title}>
            Mau konsultasi dengan siapa hari ini?
          </Text>
          <View style={styles.doctorCategoryWrapper}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.doctorCategory}>
              <Gap width={16} />
              <DoctorCategory />
              <DoctorCategory />
              <DoctorCategory />
              <DoctorCategory />
              <Gap width={6} />
            </ScrollView>
          </View>
          <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
          <DoctorRate />
          <Gap height={16} />
          <DoctorRate />
          <Gap height={16} />
          <DoctorRate />
          <Text style={styles.sectionLabel}>Good News</Text>
          <View style={styles.newsWrapper}>
            <NewsSection />
            <NewsSection />
            <NewsSection />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.background,
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
  },
  title: {
    marginTop: 28,
    marginBottom: 16,
    fontSize: 20,
    fontFamily: fonts[600],
    color: colors.text.first,
    maxWidth: 210,
  },
  doctorCategoryWrapper: {
    marginHorizontal: -16,
  },
  doctorCategory: {
    flexDirection: 'row',
  },
  sectionLabel: {
    marginTop: 30,
    marginBottom: 16,
    fontSize: 16,
    fontFamily: fonts[600],
    color: colors.text.first,
  },
  newsWrapper: {
    marginHorizontal: -16,
  },
});
