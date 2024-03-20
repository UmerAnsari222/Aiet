import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import PrimaryButton from '../../../../../components/PrimaryButton';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {LeftArrow, Speeker} from '../../../../../../assets/icons/icons';
import {Font_REGULAR} from '../../../../../themes/typogrphy';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

export default function ForRentAddPublishScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <StatusBar translucent={false} />

      <ScrollView
        contentContainerStyle={{
          width: widthPercentageToDP('90'),
          alignSelf: 'center',
          paddingVertical: heightPercentageToDP('4'),
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
        showsVerticalScrollIndicator={false}>
        {/* <View
        style={{
          flex: 1,
          width: widthPercentageToDP('90'),
          alignSelf: 'center',
          paddingVertical: heightPercentageToDP('4'),
        }}> */}
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <LeftArrow />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: '#000000D9',
                fontFamily: Font_REGULAR,
                textAlign: 'center',
                flex: 1,
              }}>
              Feature ad
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              marginTop: heightPercentageToDP('8'),
            }}>
            <Speeker />
          </View>

          <View style={{marginTop: heightPercentageToDP('6'), gap: 10}}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '600',
                color: '#000000',
                fontFamily: Font_REGULAR,
                textAlign: 'center',
                flex: 1,
              }}>
              Featured Your Ad
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                color: '#B4B4B4',
                fontFamily: Font_REGULAR,
                textAlign: 'center',
                flex: 1,
              }}>
              Lorem ipsum dolor sit amet consectetur. Turpis porttitor nisi orci
              magna fames nec risus egestas. Diam vitae et aliquet vel mi nisl
              lectus.
            </Text>
          </View>
        </View>

        <View>
          <PrimaryButton
            onPress={() => navigation.navigate('SuccessfullyScreen')}>
            <Text style={styles.signInText}>Feature Ad</Text>
          </PrimaryButton>
        </View>
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
