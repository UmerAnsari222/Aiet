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
import {
  Font_BLACK,
  Font_BOLD,
  Font_MEDIUM,
  Font_REGULAR,
  Font_SEMIBOLD,
  Font_THIN,
} from '../../../themes/typogrphy';
import {styles} from './style';
import {
  CreateGroupIcon,
  ForRentIcon,
  ForRequestIcon,
  ForSaleIcon,
  HeartRead,
  Image6,
  Image7,
  Image96,
  Image97,
  Image98,
  Image99,
  Notification1,
} from '../../../../assets/icons/icons';
import PerposeCard from '../../../components/PerposeCard';
import NewsCard from '../../../components/NewsCard';
import {useNavigation} from '@react-navigation/native';

const UserHomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        contentContainerStyle={{paddingVertical: 20}}
        showsVerticalScrollIndicator={false}>
        <View style={{width: widthPercentageToDP('90%'), alignSelf: 'center'}}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                {/* <Text style={styles.greeting}>Hey,</Text> */}
                <Text style={[styles.greeting, {color: '#E3851E'}]}>
                  AIET.NO
                </Text>
              </View>
              <View style={{flexDirection: 'row', gap: 5}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('FavoritesScreen')}
                  style={styles.circleBg}>
                  <HeartRead />
                </TouchableOpacity>
                <TouchableOpacity style={styles.circleBg}>
                  <Notification1 />
                </TouchableOpacity>
              </View>
            </View>
            {/* <Text style={{color: '#000000', fontSize: 20, fontWeight: '600'}}>
              Let's start exploring{' '}
            </Text> */}
          </View>

          <View
            style={{
              marginVertical: heightPercentageToDP('4'),
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              gap: 10,
            }}>
            <PerposeCard
              onPress={() => navigation.navigate('UserForSaleScreen')}
              Bg="#F3F3F3"
              Img={ForSaleIcon}
              name="For Sale"
              textColor="#E3851E">
              <Text style={styles.proposeCardText}>For Sale</Text>
            </PerposeCard>

            <PerposeCard
              onPress={() => navigation.navigate('UserForRentScreen')}
              Bg="#F3F3F3"
              Img={ForRentIcon}
              name="For Rent"
              textColor="#246BFD">
              <Text style={styles.proposeCardText}>For Rent</Text>
            </PerposeCard>

            <PerposeCard
              onPress={() => {}}
              Bg="#F3F3F3"
              Img={ForRequestIcon}
              name="Request"
              textColor="#FFBE1D">
              <Text style={styles.proposeCardText}>Request</Text>
            </PerposeCard>
            <PerposeCard
              onPress={() => {}}
              Bg="#F3F3F3"
              Img={CreateGroupIcon}
              name="Create Group"
              textColor="#E56D5C">
              <Text style={styles.proposeCardText}>Create {'\n'} Group</Text>
            </PerposeCard>
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity>
                <Text style={styles.benefitsText}>Benefits</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity>
                <Text style={styles.seeAll}>See All</Text>
              </TouchableOpacity> */}
            </View>

            <View style={styles.boxWrapper}>
              <View style={{flexDirection: 'row', gap: 7}}>
                <View>
                  <Image source={Image6} />
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: widthPercentageToDP('62'),
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '700',
                        color: '#000000',
                        fontFamily: Font_BOLD,
                      }}>
                      Building Materials
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '700',
                        color: '#E3851E',
                        fontFamily: Font_BOLD,
                      }}>
                      25% Discount
                    </Text>
                  </View>
                  <Text style={styles.placeText}>Oslo, Norway</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 4,
                    }}>
                    <Text style={styles.priceText}>$ 3500</Text>
                    <Text style={styles.priceDiscount}>$ 3500</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 4,
                    }}>
                    <Text style={styles.poweredBy}>Posted By:</Text>
                    <Text style={styles.companyNameText}>
                      Building Material Company
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity>
                <Text style={styles.benefitsText}>News</Text>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <NewsCard />
              <NewsCard />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserHomeScreen;
