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
import {LeftArrow, OneEmp} from '../../../../../assets/icons/icons';
import {
  Font_BOLD,
  Font_MEDIUM,
  Font_REGULAR,
} from '../../../../themes/typogrphy';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';
import LinearGradient from 'react-native-linear-gradient';

export default function UsersContactScreen() {
  const navigation = useNavigation();
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
                fontSize: 16,
                fontWeight: '600',
                color: '#000000D9',
                fontFamily: Font_REGULAR,
                flex: 1,
              }}>
              Contact
            </Text>
          </View>

          <View style={{paddingVertical: heightPercentageToDP('2')}}>
            <View style={styles.boxWrapper}>
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
                    <View>
                      <Text style={styles.textProfilers}>
                        Apartment No: 349B
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.textProfilers}>
                        Name: Jule Wilson
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.textProfilers}>Age: 25</Text>
                    </View>
                    <View>
                      <Text style={styles.textProfilers}>
                        Email: Jule223@gmail.com
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    style={{
                      borderRadius: 11,
                      position: 'absolute',
                      right: 0,
                      top: 0,
                    }}>
                    <LinearGradient
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 1}}
                      locations={[0, 0.4966, 0.9996]}
                      colors={['#7C4002', '#000000', '#7C4002']}
                      style={{
                        flex: 1,
                        paddingVertical: heightPercentageToDP('1'),
                        borderRadius: 20,
                        alignItems: 'center',
                        paddingHorizontal: widthPercentageToDP('2'),
                      }}>
                      <Text style={{color: '#FFF', fontSize: 10}}>
                        Communicate
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.boxWrapper}>
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
                    <View>
                      <Text style={styles.textProfilers}>
                        Apartment No: 349B
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.textProfilers}>
                        Name: Jule Wilson
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.textProfilers}>Age: 25</Text>
                    </View>
                    <View>
                      <Text style={styles.textProfilers}>
                        Email: Jule223@gmail.com
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    style={{
                      borderRadius: 11,
                      position: 'absolute',
                      right: 0,
                      top: 0,
                    }}>
                    <LinearGradient
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 1}}
                      locations={[0, 0.4966, 0.9996]}
                      colors={['#7C4002', '#000000', '#7C4002']}
                      style={{
                        flex: 1,
                        paddingVertical: heightPercentageToDP('1'),
                        borderRadius: 20,
                        alignItems: 'center',
                        paddingHorizontal: widthPercentageToDP('2'),
                      }}>
                      <Text style={{color: '#FFF', fontSize: 10}}>
                        Communicate
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.boxWrapper}>
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
                    <View>
                      <Text style={styles.textProfilers}>
                        Apartment No: 349B
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.textProfilers}>
                        Name: Jule Wilson
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.textProfilers}>Age: 25</Text>
                    </View>
                    <View>
                      <Text style={styles.textProfilers}>
                        Email: Jule223@gmail.com
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    style={{
                      borderRadius: 11,
                      position: 'absolute',
                      right: 0,
                      top: 0,
                    }}>
                    <LinearGradient
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 1}}
                      locations={[0, 0.4966, 0.9996]}
                      colors={['#7C4002', '#000000', '#7C4002']}
                      style={{
                        flex: 1,
                        paddingVertical: heightPercentageToDP('1'),
                        borderRadius: 20,
                        alignItems: 'center',
                        paddingHorizontal: widthPercentageToDP('2'),
                      }}>
                      <Text style={{color: '#FFF', fontSize: 10}}>
                        Communicate
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* <View>
        <PrimaryButton
          onPress={() =>
            navigation.navigate('HousingAssociationGroupScreen')
          }>
          <Text style={styles.signInText}>Submit Complaint</Text>
        </PrimaryButton>
      </View> */}
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
