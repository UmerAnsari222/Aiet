import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {LeftArrow} from '../../../../assets/icons/icons';
import {Font_REGULAR} from '../../../themes/typogrphy';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';
import PrimaryButton from '../../../components/PrimaryButton';

const CompanyChangePasswordScreen = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
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
              Change Password
            </Text>
          </View>

          <View
            style={{
              gap: widthPercentageToDP('6'),
              marginVertical: heightPercentageToDP('10'),
            }}>
            <TextInput
              value={oldPassword}
              onChangeText={e => setOldPassword(e)}
              style={styles.input}
              placeholder="Old Password"
              placeholderTextColor={'#727272'}
            />
            <TextInput
              value={password}
              onChangeText={e => setPassword(e)}
              style={styles.input}
              placeholder="New Password"
              placeholderTextColor={'#727272'}
            />
            <TextInput
              value={confirmPassword}
              onChangeText={e => setConfirmPassword(e)}
              style={styles.input}
              placeholder="Confirm New Password"
              placeholderTextColor={'#727272'}
            />
          </View>

          <View>
            <PrimaryButton onPress={() => {}}>
              <Text style={styles.signInText}>Change Password</Text>
            </PrimaryButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CompanyChangePasswordScreen;
