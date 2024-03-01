import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  LargeImage,
  Location,
  OneEmp,
  Pin,
  SmLogo,
  ThreeEmp,
  TwoEmp,
  UserPin,
} from '../../../../assets/icons/icons';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Font_BLACK, Font_MEDIUM} from '../../../themes/typogrphy';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps';

const CompanyProfileScreen = () => {
  const navigation = useNavigation();
  const about =
    'psum dor amit Lorem ipsum dor amit dor um dor amit Lorem ipsum dor amit dor Lorem ipsum dor amit Lorempsum dor amit Lorem ipsum dor amit dor um dor amit Lorem ipsum dor amit dor Lorem ipsum dor';

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: widthPercentageToDP('90'),
            alignSelf: 'center',
            paddingVertical: heightPercentageToDP('4'),
          }}>
          <View>
            <Image source={SmLogo} />
          </View>

          <View style={{marginVertical: heightPercentageToDP('2')}}>
            <Text style={styles.heading}>Real Estate Company</Text>
          </View>

          <View style={styles.boxWrapper}>
            <View>
              <Image source={LargeImage} />
            </View>
            <View style={{marginVertical: heightPercentageToDP('2'), gap: 4}}>
              <Text style={styles.companyProfileHeading}>+1 657 563 573</Text>
              <Text style={styles.companyProfileHeading}>
                Nicolas322@gmail.com
              </Text>
              <Text style={styles.companyProfileHeading}>
                New West Colony, New York
              </Text>
            </View>
          </View>

          <View style={styles.boxWrapper}>
            <Text
              style={{
                color: '#000000',
                fontWeight: '700',
                fontSize: 16,
                lineHeight: 19.2,
              }}>
              About
            </Text>

            <View>
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
                <Text
                  style={{
                    color: '#E3851E',
                    fontWeight: '600',
                    fontSize: 16,
                    lineHeight: 19.2,
                  }}>
                  Read More
                </Text>
              )}
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
            <Text
              style={{
                color: '#000000',
                fontWeight: '700',
                fontSize: 16,
                lineHeight: 19.2,
              }}>
              Employees
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                flexWrap: 'wrap',
                marginVertical: heightPercentageToDP('1'),
              }}>
              <TouchableOpacity>
                <Image source={OneEmp} style={{objectFit: 'cover'}} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={TwoEmp} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={ThreeEmp} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.boxWrapper}>
            <View>
              <Image source={OneEmp} />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: heightPercentageToDP('1'),
              }}>
              <View style={{flexDirection: 'row', gap: 4}}>
                <Text style={styles.realStateProfileHeading}>Name:</Text>
                <Text style={[styles.realStateProfileHeading, {fontSize: 14}]}>
                  Jule Wilson
                </Text>
              </View>
              <View style={{flexDirection: 'row', gap: 4}}>
                <Text style={styles.realStateProfileHeading}>Number:</Text>
                <Text style={[styles.realStateProfileHeading, {fontSize: 14}]}>
                  +1 675 453 532
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: heightPercentageToDP('1'),
              }}>
              <View style={{flexDirection: 'row', gap: 4}}>
                <Text style={styles.realStateProfileHeading}>Age:</Text>
                <Text style={[styles.realStateProfileHeading, {fontSize: 14}]}>
                  25
                </Text>
              </View>
              <View style={{flexDirection: 'row', gap: 4}}>
                <Text style={styles.realStateProfileHeading}>Email:</Text>
                <Text style={[styles.realStateProfileHeading, {fontSize: 14}]}>
                  Jule223@gmail.com
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: heightPercentageToDP('1'),
              }}>
              <View style={{flexDirection: 'row', gap: 4}}>
                <Text style={styles.realStateProfileHeading}>Title:</Text>
                <Text style={[styles.realStateProfileHeading, {fontSize: 14}]}>
                  Real Estate Broker
                </Text>
              </View>
            </View>

            <View
              style={{
                borderWidth: 0.5,
                marginVertical: heightPercentageToDP('1'),
                borderColor: '#D9D9D9',
              }}
            />

            <Text
              style={{
                color: '#000000',
                fontWeight: '700',
                fontSize: 16,
                lineHeight: 19.2,
                marginTop: 4,
              }}>
              About
            </Text>

            <View style={{marginTop: heightPercentageToDP('2')}}>
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
                <TouchableOpacity
                  onPress={() => navigation.navigate('CompanyAgentScreen')}>
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
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CompanyProfileScreen;
