import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {Fragment} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {
  Activity,
  Appartment,
  Frame,
  HeartBlack,
  HeartRead,
  Image6,
  Imagegell,
  LeftArrow,
  Location,
  OneEmp,
  Pin,
  SmArrow,
  SolarBath,
  SolidBed,
  StarYellow,
  YellowStar,
} from '../../../assets/icons/icons';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';
import {Font_BOLD, Font_MEDIUM} from '../../themes/typogrphy';
import MapView, {Marker} from 'react-native-maps';

const PropertyDetailScreen = () => {
  const navigation = useNavigation();
  return (
    // <SafeAreaView style={{flex: 1, backgroundColor:"tr"}}>
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
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    style={styles.whiteCircle}
                    onPress={() => navigation.goBack()}>
                    <SmArrow />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.whiteCircle}
                    onPress={() => {}}>
                    <HeartBlack />
                  </TouchableOpacity>
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
                  <View style={[styles.orangeCircle, {width: 30, height: 30}]}>
                    <Activity />
                  </View>
                </View>
              </View>
            </View>

            <View style={{marginVertical: heightPercentageToDP('1')}}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 16,
                  fontWeight: '700',
                  lineHeight: 26,
                  fontFamily: Font_MEDIUM,
                }}>
                Description
              </Text>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 12,
                  fontWeight: '400',
                  lineHeight: 14,
                  fontFamily: Font_MEDIUM,
                  marginTop: 10,
                }}>
                This charming two-story house, nestled in a quiet suburban
                neighborhood, offers a perfect blend of modern comfort and
                timeless elegance. Boasting four bedrooms and three bathrooms,
                the residence features a spacious open floor plan with high
                ceilings, allowing natural light to illuminate the tastefully
                designed interiors.
              </Text>
            </View>

            <View style={{marginVertical: heightPercentageToDP('4')}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 16,
                    fontWeight: '700',
                    lineHeight: 26,
                    fontFamily: Font_MEDIUM,
                  }}>
                  Gallery
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 16,
                      fontWeight: '700',
                      lineHeight: 26,
                      fontFamily: Font_MEDIUM,
                    }}>
                    View All
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  marginTop: heightPercentageToDP('1'),
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 6,
                }}>
                <View style={{width: 79, height: 50}}>
                  <Image source={Imagegell} width={100} height={100} />
                </View>
                <View style={{width: 79, height: 50}}>
                  <Image source={Imagegell} width={100} height={100} />
                </View>
                <View style={{width: 79, height: 50}}>
                  <Image source={Imagegell} width={100} height={100} />
                </View>
                <View style={{width: 79, height: 50}}>
                  <Image source={Imagegell} width={100} height={100} />
                  <View
                    style={{
                      backgroundColor: '#000',
                      width: 70,
                      height: 50,
                      position: 'absolute',
                      opacity: 0.6,
                      borderRadius: 5,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: '#FFF'}}>+ 3</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.boxWrapperTransparent}>
              <Text
                style={{
                  color: '#000000',
                  fontWeight: '700',
                  fontSize: 16,
                  lineHeight: 19.2,
                }}>
                Location
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 6,
                  marginVertical: heightPercentageToDP('1'),
                }}>
                <Location />
                <Text
                  style={{
                    fontSize: 11.33,
                    fontWeight: '500',
                    lineHeight: 18.69,
                    color: '#8E8D8D',
                  }}>
                  Business Bay Norway
                </Text>
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.mapContainer}>
                <MapView
                  mapType="terrain"
                  style={styles.map}
                  initialRegion={{
                    latitude: 35.6762,
                    longitude: 139.6503,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                  }}>
                  <Marker
                    coordinate={{
                      latitude: 35.6762,
                      longitude: 139.6503,
                      latitudeDelta: 0.01,
                      longitudeDelta: 0.01,
                    }}>
                    <Pin />
                  </Marker>
                </MapView>
              </View>
            </View>

            <View style={styles.boxWrapper}>
              {/* <Text
                style={{
                  color: '#000000',
                  fontSize: 16,
                  fontWeight: '600',
                  lineHeight: 26,
                  fontFamily: Font_MEDIUM,
                }}>
                Posted By
              </Text> */}

              <View style={{flexDirection: 'row', gap: 12}}>
                <View>
                  <Image source={OneEmp} style={{objectFit: 'cover'}} />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: widthPercentageToDP('65'),
                  }}>
                  <View>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 14,
                        fontWeight: '600',
                        lineHeight: 21,
                        fontFamily: Font_BOLD,
                      }}>
                      Rocks Velkeinjen
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginVertical: heightPercentageToDP('0.4'),
                      }}>
                      <YellowStar />
                      <YellowStar />
                      <YellowStar />
                      <YellowStar />
                    </View>
                    <Text
                      style={{
                        color: '#656565',
                        fontSize: 10,
                        fontWeight: '500',
                        lineHeight: 15,
                        fontFamily: Font_BOLD,
                      }}>
                      Lorem ipsum dolor sit amet consectetur. Turpis porttitor
                      nisi orci magna fames nec risus egestasLorem ipsum dolor
                      sit amet consectetur. Turpis porttitor nisi orci magna
                      fames nec risus egestas
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: '#656565',
                        fontSize: 10,
                        fontWeight: '500',
                        lineHeight: 15,
                        fontFamily: Font_BOLD,
                      }}>
                      10 Feb
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
    // </SafeAreaView>
  );
};

export default PropertyDetailScreen;
