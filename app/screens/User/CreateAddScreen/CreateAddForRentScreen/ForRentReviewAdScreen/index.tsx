import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StatusBar,
} from 'react-native';
import React from 'react';
import {
  Activity,
  Appartment,
  Frame,
  HeartBlack,
  Imagegell,
  Location,
  OneEmp,
  SmArrow,
  SolarBath,
  SolidBed,
  YellowStar,
} from '../../../../../../assets/icons/icons';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Font_BOLD, Font_MEDIUM} from '../../../../../themes/typogrphy';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import PrimaryButton from '../../../../../components/PrimaryButton';

export default function ForRentReviewAdScreen() {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <ScrollView
        style={{backgroundColor: '#FFFFFF'}}
        // contentContainerStyle={{paddingVertical: 20}}
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <View>
            <ImageBackground
              source={Appartment}
              style={{borderRadius: 7, overflow: 'hidden'}}>
              <View
                style={{
                  height: 381,
                  borderRadius: 15,
                }}>
                <View
                  style={{
                    paddingVertical: heightPercentageToDP('7'),
                    paddingHorizontal: widthPercentageToDP('6'),
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={styles.whiteCircle}
                    onPress={() => navigation.goBack()}>
                    <SmArrow />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 24,
                      lineHeight: 28,
                      fontWeight: '700',
                      flex: 1,
                      textAlign: 'center',
                      fontFamily: Font_BOLD,
                    }}>
                    Check Out
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>

          <View
            style={{
              width: widthPercentageToDP('90'),
              alignSelf: 'center',
              marginTop: heightPercentageToDP('2'),
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 20,
                fontWeight: '700',
                lineHeight: 26,
                fontFamily: Font_MEDIUM,
              }}>
              Modernica Apartment
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 7,
                marginVertical: heightPercentageToDP('1'),
              }}>
              <View
                style={{
                  backgroundColor: '#FBECDB',
                  width: 75,
                  paddingVertical: heightPercentageToDP('1'),
                  paddingHorizontal: heightPercentageToDP('1'),
                  borderRadius: 4,
                }}>
                <Text style={styles.apartmentText}>Apartment</Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                <YellowStar />
                <Text style={styles.apartmentTextBlack}>4.9</Text>
                <Text style={styles.apartmentTextBlack}>(1257 reviews)</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 20,
                marginTop: heightPercentageToDP('1'),
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
                <View style={styles.orangeCircle}>
                  <SolidBed />
                </View>
                <Text style={styles.feactherTextBlack}>3 Beds</Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
                <View style={styles.orangeCircle}>
                  <SolarBath />
                </View>
                <Text style={styles.feactherTextBlack}>3 Bath</Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
                <View style={styles.orangeCircle}>
                  <Frame />
                </View>
                <Text style={styles.feactherTextBlack}>950 sqft</Text>
              </View>
            </View>

            <View style={styles.boxWrapper}>
              <Text
                style={{
                  color: '#D07D36',
                  fontSize: 16,
                  fontWeight: '600',
                  lineHeight: 26,
                  fontFamily: Font_MEDIUM,
                }}>
                Renting time
              </Text>

              <View style={{gap: 12}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: widthPercentageToDP('65'),
                  }}>
                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('OwnerDetailScreen')}>
                      <Text
                        style={{
                          color: '#000000',
                          fontSize: 14,
                          fontWeight: '600',
                          lineHeight: 21,
                          fontFamily: Font_BOLD,
                        }}>
                        Jan 2
                      </Text>
                    </TouchableOpacity>
                    <Text
                      style={{
                        color: '#656565',
                        fontSize: 10,
                        fontWeight: '500',
                        lineHeight: 15,
                        fontFamily: Font_BOLD,
                      }}>
                      11 am
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.boxWrapper}>
              <Text
                style={{
                  color: '#D07D36',
                  fontSize: 16,
                  fontWeight: '600',
                  lineHeight: 26,
                  fontFamily: Font_MEDIUM,
                }}>
                Rent period
              </Text>

              <View style={{gap: 12}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: widthPercentageToDP('65'),
                  }}>
                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('OwnerDetailScreen')}>
                      <Text
                        style={{
                          color: '#000000',
                          fontSize: 14,
                          fontWeight: '600',
                          lineHeight: 21,
                          fontFamily: Font_BOLD,
                        }}>
                        1 year
                      </Text>
                    </TouchableOpacity>
                    <Text
                      style={{
                        color: '#656565',
                        fontSize: 10,
                        fontWeight: '500',
                        lineHeight: 15,
                        fontFamily: Font_BOLD,
                      }}>
                      2 jan 2023 - 2 jan 2024
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.boxWrapper}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 16,
                  fontWeight: '600',
                  lineHeight: 26,
                  fontFamily: Font_MEDIUM,
                }}>
                Posted By
              </Text>

              <View style={{flexDirection: 'row', gap: 12}}>
                <View>
                  <Image source={OneEmp} style={{objectFit: 'cover'}} />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: widthPercentageToDP('65'),
                  }}>
                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('OwnerDetailScreen')}>
                      <Text
                        style={{
                          color: '#000000',
                          fontSize: 14,
                          fontWeight: '600',
                          lineHeight: 21,
                          fontFamily: Font_BOLD,
                        }}>
                        Alex Hales
                      </Text>
                    </TouchableOpacity>
                    <Text
                      style={{
                        color: '#656565',
                        fontSize: 10,
                        fontWeight: '500',
                        lineHeight: 15,
                        fontFamily: Font_BOLD,
                      }}>
                      Alexhales2020@gmail.com
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={{paddingBottom: heightPercentageToDP('2')}}>
              <PrimaryButton
                onPress={() => navigation.navigate('ForRentAddPublishScreen')}>
                <Text style={styles.signInText}>Publish</Text>
              </PrimaryButton>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
