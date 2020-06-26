import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ILPhotoNull} from '../../assets';
import {
  DoctorCategory,
  DoctorRate,
  Gap,
  List,
  NewsSection,
} from '../../components';
import {getData} from '../../utils';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

const Doctor = ({navigation}) => {
  const [profile, setProfile] = useState({
    photo: '',
    fullName: '',
    profession: '',
  });

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      if (data.photo) {
        data.photo = {uri: res.photo};
        setProfile(data);
      } else {
        data.photo = ILPhotoNull;
        setProfile(data);
      }
    });
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={32} />
          <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
            <List
              title={profile.fullName}
              desc={profile.profession}
              image={profile.photo}
            />
          </TouchableOpacity>
          <Text style={styles.title}>
            Mau konsultasi dengan siapa hari ini?
          </Text>
          <View style={styles.doctorCategoryWrapper}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.doctorCategory}>
              <Gap width={16} />
              <DoctorCategory
                onPress={() => navigation.navigate('ChooseDoctor')}
              />
              <DoctorCategory
                onPress={() => navigation.navigate('ChooseDoctor')}
              />
              <DoctorCategory
                onPress={() => navigation.navigate('ChooseDoctor')}
              />
              <DoctorCategory
                onPress={() => navigation.navigate('ChooseDoctor')}
              />
              <Gap width={6} />
            </ScrollView>
          </View>
          <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
          <DoctorRate onPress={() => navigation.navigate('DoctorProfile')} />
          <Gap height={16} />
          <DoctorRate onPress={() => navigation.navigate('DoctorProfile')} />
          <Gap height={16} />
          <DoctorRate onPress={() => navigation.navigate('DoctorProfile')} />
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
