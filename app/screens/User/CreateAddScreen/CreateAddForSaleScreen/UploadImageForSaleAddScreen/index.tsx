import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {
  Image7,
  LeftArrow,
  PlusIcon,
} from '../../../../../../assets/icons/icons';
import {Font_REGULAR} from '../../../../../themes/typogrphy';
import {styles} from './style';
import PrimaryButton from '../../../../../components/PrimaryButton';

export default function UploadImageForSaleAddScreen() {
  const [imageCount, setImageCount] = useState<number[]>([1]);
  const navigation = useNavigation();

  function handelImage() {
    console.log(imageCount.length);
    if (imageCount.length == 10) return;
    setImageCount(prev => [...prev, prev[prev.length - 1] + 1]);
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
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
              Create Ad
            </Text>
          </View>

          <View style={{paddingVertical: heightPercentageToDP('10')}}>
            <View>
              <Text style={styles.uploadImageText}>Upload Images</Text>
              <Text style={styles.uploadImageMinimText}>
                Upload maximum 10 images
              </Text>
            </View>

            <View style={styles.addImageWrapper}>
              {imageCount.map(img => (
                <Image key={img} style={styles.addImageStyle} source={Image7} />
              ))}

              <TouchableOpacity
                onPress={handelImage}
                style={styles.addImageButton}>
                <PlusIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <PrimaryButton
            onPress={() => navigation.navigate('DataForSaleAddScreen')}>
            <Text style={styles.signInText}>Next</Text>
          </PrimaryButton>
        </View>
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
