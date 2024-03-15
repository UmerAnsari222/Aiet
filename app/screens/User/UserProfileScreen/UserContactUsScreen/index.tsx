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
import {LeftArrow} from '../../../../../assets/icons/icons';
import {Font_REGULAR} from '../../../../themes/typogrphy';
import {styles} from './style';
import PrimaryButton from '../../../../components/PrimaryButton';
import {useNavigation} from '@react-navigation/native';

const UserContactUsScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            width: widthPercentageToDP('90'),
            alignSelf: 'center',
            paddingVertical: heightPercentageToDP('4'),
            // height: heightPercentageToDP('100'),
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
              Contact Us
            </Text>
          </View>

          <View
            style={{
              marginBottom: heightPercentageToDP('10'),
            }}>
            <TextInput
              style={styles.wrapper}
              placeholder="Your Name"
              placeholderTextColor={'#B9B9B9'}
            />
            <TextInput
              style={styles.wrapper}
              placeholder="Email"
              placeholderTextColor={'#B9B9B9'}
              keyboardType="email-address"
            />
            <TextInput
              style={[styles.wrapper, {maxHeight: 150, height: 150}]}
              placeholder="Your Message"
              placeholderTextColor={'#B9B9B9'}
              keyboardType="default"
              multiline={true}
              textAlignVertical="top"
            />
          </View>

          <View>
            <PrimaryButton onPress={() => {}}>
              <Text style={styles.signInText}>Send</Text>
            </PrimaryButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserContactUsScreen;
