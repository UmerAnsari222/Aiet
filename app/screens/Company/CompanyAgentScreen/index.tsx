import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {
  Agent89,
  Headphone,
  Heart,
  LeftArrow,
  Property,
  Shape,
  SmLogo,
  Star,
  StarFull,
  StarYellow,
} from '../../../../assets/icons/icons';
import {
  Font_BLACK,
  Font_BOLD,
  Font_MEDIUM,
  Font_REGULAR,
} from '../../../themes/typogrphy';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';
import ReviewCard from '../../../components/ReviewCard';
import PropertyCard from '../../../components/PropertyCard';

const CompanyAgentScreen = () => {
  const about =
    'lorem ipsum dor amit Lorem ipsum dor amit dor um dor amit Lorem ipsum dor amit dor Lorem ipsum dor amit Lorempsum dor amit Lorem ipsum dor amit dor um dor amit Lorem ipsum dor amit dor Lorem ipsum dor';

  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
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
              justifyContent: 'space-between',
              gap: 10,
            }}>
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
                  fontSize: 16,
                  fontWeight: '600',
                  color: '#000000D9',
                  fontFamily: Font_REGULAR,
                  lineHeight: 24,
                }}>
                Real Estate Agent
              </Text>
            </View>
            <Image source={SmLogo} />
          </View>

          <View
            style={{
              width: widthPercentageToDP('15'),
              height: heightPercentageToDP('15'),
              borderRadius: 100,
            }}>
            <Image
              source={Agent89}
              borderRadius={100}
              style={{objectFit: 'cover'}}
            />
          </View>

          <View>
            <Text style={styles.nameText}>Nicolas Zeballos</Text>
            <Text style={styles.phoneText}>+1 657 563 573</Text>
            <Text style={styles.phoneText}>Nicolas322@gmail.com</Text>
            <Text style={styles.phoneText}>New West Colony, New York</Text>
          </View>

          <View style={{marginTop: heightPercentageToDP('2')}}>
            <Text
              style={{
                color: '#000000',
                fontWeight: '700',
                fontSize: 16,
                lineHeight: 19.2,
                marginVertical: 4,
              }}>
              About
            </Text>
            <Text
              style={{
                color: '#000000',
                fontWeight: '400',
                fontSize: 16,
                lineHeight: 19.2,
              }}>
              {about.length > 50 ? `${about.slice(0, 120)}...` : about}
            </Text>
            {about.length > 50 && (
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={{
                    color: '#E3851E',
                    fontWeight: '600',
                    fontSize: 16,
                    lineHeight: 19.2,
                  }}>
                  Read More
                </Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={{marginVertical: heightPercentageToDP('2')}}>
            <Text
              style={{
                color: '#000000',
                fontWeight: '700',
                fontSize: 16,
                lineHeight: 19.2,
                marginVertical: 4,
              }}>
              Reviews
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </ScrollView>
          </View>

          <View style={styles.boxWrapper}>
            <View style={{flexDirection: 'row', gap: 15, alignItems: 'center'}}>
              <Headphone />
              <Text style={styles.howWeHelp}>How can we help you?</Text>
            </View>
          </View>

          <Text style={styles.propertyText}>
            Properties that real estate agent has sold or listed to sell.
          </Text>

          <View style={{marginVertical: heightPercentageToDP('3')}}>
            <Text style={styles.propertyCardTypeText}>To Sell</Text>

            <PropertyCard />
          </View>

          <View style={{marginVertical: heightPercentageToDP('3')}}>
            <Text style={styles.propertyCardTypeText}>Sold</Text>

            <PropertyCard />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CompanyAgentScreen;
