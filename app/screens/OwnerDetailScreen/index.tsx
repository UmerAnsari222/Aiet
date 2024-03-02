import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {
  Activity,
  Call,
  EditPen,
  Girl2,
  Home1,
  LeftArrow,
  LgStar,
  OneEmp,
  Profile,
  ProfileIcon,
  ShieldDone,
  Star,
  StarBlack,
  Work,
  YellowStar,
} from '../../../assets/icons/icons';
import {Font_BOLD, Font_MEDIUM, Font_REGULAR} from '../../themes/typogrphy';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';

const OwnerDetailScreen = () => {
  const about =
    'psum dor amit Lorem ipsum dor amit dor um dor amit Lorem ipsum dor amit dor Lorem ipsum dor amit Lorempsum dor amit Lorem ipsum dor amit dor um dor amit Lorem ipsum dor amit dor Lorem ipsum dor';

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <StatusBar translucent={false} />
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
              fontSize: 16,
              fontWeight: '600',
              color: '#000000D9',
              fontFamily: Font_REGULAR,
            }}>
            Owner details
          </Text>
        </View>

        <View
          style={[
            styles.boxWrapper,
            {marginVertical: heightPercentageToDP('4')},
          ]}>
          <View style={{flexDirection: 'row', gap: 12}}>
            <View>
              {/* <Image source={OneEmp} style={{objectFit: 'cover'}} /> */}
              <View
                style={{
                  backgroundColor: '#F5F5F5',
                  height: 64,
                  width: 64,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 999,
                }}>
                <ProfileIcon />

                <View style={{position: 'absolute', bottom: 8, right: 9}}>
                  <TouchableOpacity>
                    <EditPen />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: widthPercentageToDP('60'),
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
                  Alex Hales
                </Text>
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
              <View style={{flexDirection: 'row', gap: 4}}>
                <View style={[styles.orangeCircle, {width: 30, height: 30}]}>
                  <Call />
                </View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ChatScreen', {name: '634861846816481'})
                  }
                  style={[styles.orangeCircle, {width: 30, height: 30}]}>
                  <Activity />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.ownDetailTextImageWrapper}>
            <Profile fill={'#D07D36'} />
            <Text style={styles.ownDetailText}>Super Landlord</Text>
          </View>
          <View style={styles.ownDetailTextImageWrapper}>
            <ShieldDone fill={'#D07D36'} />
            <Text style={styles.ownDetailText}>Identity Verified</Text>
          </View>
          <View style={styles.ownDetailTextImageWrapper}>
            <LgStar fill={'#D07D36'} />
            <Text style={styles.ownDetailText}>10 Reviews</Text>
          </View>
        </View>

        <View style={styles.separator} />

        <View>
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
                fontSize: 12,
                lineHeight: 14,
              }}>
              {about.length > 50 ? `${about.slice(0, 120)}...` : about}
            </Text>
            {about.length > 50 && (
              <Text
                style={{
                  color: '#E3851E',
                  fontWeight: '600',
                  fontSize: 12,
                  lineHeight: 14,
                }}>
                Read More
              </Text>
            )}
          </View>
        </View>

        <View style={{marginTop: heightPercentageToDP('2')}}>
          <View style={styles.ownDetailTextImageWrapper}>
            <Home1 fill={'#D07D36'} />
            <Text style={styles.ownDetailText}>Lives in New York</Text>
          </View>
          <View style={styles.ownDetailTextImageWrapper}>
            <Work fill={'#D07D36'} />
            <Text style={styles.ownDetailText}>Identity Verified</Text>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={{marginVertical: heightPercentageToDP('2')}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <StarBlack />
              <Text style={styles.apartmentTextBlack}>4.9</Text>
              <Text style={styles.apartmentTextBlack}>51 reviews</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.apartmentTextBlack}>View all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            style={{marginVertical: heightPercentageToDP('2')}}
            horizontal
            showsHorizontalScrollIndicator={false}>
            <View
              style={[
                styles.boxWrapper,
                {width: widthPercentageToDP('60'), marginRight: 10},
              ]}>
              <View style={{flexDirection: 'row', gap: 5}}>
                <View>
                  <Image
                    width={30}
                    height={30}
                    style={{objectFit: 'cover', borderRadius: 100}}
                    source={Girl2}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignContent: 'space-between',
                    width: widthPercentageToDP('40'),
                  }}>
                  <View style={{flex: 1}}>
                    <Text style={styles.reviewSenderName}>Alexa bless</Text>
                    <Text style={styles.reviewDate}>December 2022</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <YellowStar />
                    <Text style={styles.rating}>4.8</Text>
                  </View>
                </View>
              </View>

              <Text style={styles.reviewContent}>
                Lorem ipsum dolor sit amet consectetur. Augue fames vivamus
                leo...
              </Text>
            </View>
            <View
              style={[
                styles.boxWrapper,
                {width: widthPercentageToDP('60'), marginRight: 10},
              ]}>
              <View style={{flexDirection: 'row', gap: 5}}>
                <View>
                  <Image
                    width={30}
                    height={30}
                    style={{objectFit: 'cover', borderRadius: 100}}
                    source={Girl2}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignContent: 'space-between',
                    width: widthPercentageToDP('40'),
                  }}>
                  <View style={{flex: 1}}>
                    <Text style={styles.reviewSenderName}>Alexa bless</Text>
                    <Text style={styles.reviewDate}>December 2022</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <YellowStar />
                    <Text style={styles.rating}>4.8</Text>
                  </View>
                </View>
              </View>

              <Text style={styles.reviewContent}>
                Lorem ipsum dolor sit amet consectetur. Augue fames vivamus
                leo...
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OwnerDetailScreen;
