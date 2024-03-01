import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {
  Camra,
  LeftArrow,
  Pencil,
  ProfileIcon,
} from '../../../../assets/icons/icons';
import {useNavigation} from '@react-navigation/native';
import {Font_REGULAR} from '../../../themes/typogrphy';
import {styles} from './style';
import PrimaryButton from '../../../components/PrimaryButton';

const CompanyEditScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            width: widthPercentageToDP('90'),
            alignSelf: 'center',
            paddingVertical: heightPercentageToDP('4'),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <LeftArrow />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                color: '#000000D9',
                fontFamily: Font_REGULAR,
              }}>
              Edit Profile
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              marginTop: heightPercentageToDP('3'),
            }}>
            <View
              style={{
                backgroundColor: '#F5F5F5',
                height: 108,
                width: 108,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 999,
              }}>
              <ProfileIcon />

              <View style={{position: 'absolute', bottom: 15, right: 9}}>
                <TouchableOpacity>
                  <Camra />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{gap: 10}}>
            <View>
              <Text style={styles.label}>Name</Text>
              <View style={styles.input}>
                <TextInput
                  style={{flex: 1}}
                  placeholder="Name"
                  placeholderTextColor={'#727272'}
                />
                <Pencil />
              </View>
            </View>
            <View>
              <Text style={styles.label}>Email</Text>
              <View style={styles.input}>
                <TextInput
                  style={{flex: 1}}
                  placeholder="Email"
                  placeholderTextColor={'#727272'}
                />
                <Pencil />
              </View>
            </View>
            <View>
              <Text style={styles.label}>State</Text>
              <View style={styles.input}>
                <TextInput
                  style={{flex: 1}}
                  placeholder="State"
                  placeholderTextColor={'#727272'}
                />
                <Pencil />
              </View>
            </View>
            <View>
              <Text style={styles.label}>Town</Text>
              <View style={styles.input}>
                <TextInput
                  style={{flex: 1}}
                  placeholder="State"
                  placeholderTextColor={'#727272'}
                />
                <Pencil />
              </View>
            </View>
          </View>
          <View style={{marginTop: heightPercentageToDP('5')}}>
            <PrimaryButton onPress={() => {}}>
              <Text style={styles.signInText}>Update Profile</Text>
            </PrimaryButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CompanyEditScreen;
