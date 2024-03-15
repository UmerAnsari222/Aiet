import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {HeadphoneMic, LeftArrow} from '../../../../../assets/icons/icons';
import {Font_REGULAR} from '../../../../themes/typogrphy';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

const HelpScreen = () => {
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
              Help
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('UserContactUsScreen')}
            style={styles.wrapper}>
            <HeadphoneMic />
            <Text
              style={{
                color: '#122C3E',
                fontSize: 15,
                fontWeight: '700',
                lineHeight: 18,
              }}>
              Customer Service
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpScreen;
