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
import {LeftArrow, SelectImage} from '../../../../../assets/icons/icons';
import {Font_REGULAR} from '../../../../themes/typogrphy';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';

export default function CreateAddForSaleScreen() {
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
                fontWeight: '700',
                color: '#000000D9',
                fontFamily: Font_REGULAR,
                textAlign: 'center',
                flex: 1,
              }}>
              For Sale
            </Text>
          </View>

          <View style={{paddingVertical: heightPercentageToDP('10')}}>
            <View>
              <Text style={styles.uploadImageText}>Upload Images</Text>
              <Text style={styles.uploadImageMinimText}>
                Upload maximum 10 images
              </Text>
            </View>

            <View style={styles.uploadImageWapper}>
              <SelectImage />
              <Text style={styles.uploadImageMinimText10}>
                Upload maximum 10 images
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('UploadImageForSaleAddScreen')
                }
                style={styles.uploadButton}>
                <Text
                  style={{fontSize: 9.75, fontWeight: '600', lineHeight: 27}}>
                  Upload Photos
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
