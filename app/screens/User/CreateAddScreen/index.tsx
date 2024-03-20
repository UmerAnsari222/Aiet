import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Font_REGULAR, Font_SEMIBOLD} from '../../../themes/typogrphy';
import {AddRent, AddRequest, AddSale} from '../../../../assets/icons/icons';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

export default function CreateAddScreen() {
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            <View style={{flex: 1}}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '700',
                  color: '#000000D9',
                  fontFamily: Font_REGULAR,
                  textAlign: 'center',
                }}>
                Create Ad
              </Text>
            </View>
          </View>

          <View style={{gap: 20, marginTop: heightPercentageToDP('4')}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('CreateAddForRentScreen')}
              style={styles.buttons}>
              <Text style={styles.buttonsText}>
                Create {'\n'} Ad For {'\n'} Rent
              </Text>

              <Image
                style={{width: 178, height: 122, objectFit: 'cover'}}
                source={AddRent}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('CreateAddForSaleScreen')}
              style={styles.buttons}>
              <Text style={styles.buttonsText}>
                Create {'\n'} Ad For {'\n'} Sale
              </Text>

              <Image
                style={{width: 178, height: 122, objectFit: 'cover'}}
                source={AddSale}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
              <Text style={styles.buttonsText}>Request</Text>

              <Image
                style={{width: 178, height: 122, objectFit: 'cover'}}
                source={AddRequest}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
