import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import PrimaryButton from '../../../../components/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {LeftArrow, PlusIcon} from '../../../../../assets/icons/icons';
import {Font_REGULAR} from '../../../../themes/typogrphy';
import {styles} from './style';
import NewsCard from '../../../../components/NewsCard';

export default function HousingAssociationGroupScreen() {
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
                textAlign: 'left',
                flex: 1,
              }}>
              Housing Association Group
            </Text>
          </View>

          <View style={{paddingVertical: heightPercentageToDP('4')}}>
            <View>
              <Text style={styles.label}>Notice Board</Text>
              <View style={styles.inputWrapper}>
                <PlusIcon />
              </View>
            </View>

            <View style={{marginTop: heightPercentageToDP('2')}}>
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

          <View>
            <View
              style={{
                marginVertical: heightPercentageToDP('3'),
              }}>
              <ScrollView
                contentContainerStyle={{gap: 10}}
                horizontal
                showsHorizontalScrollIndicator={false}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('UsersContactScreen')}
                  style={[
                    styles.filtersButton,
                    {
                      backgroundColor: '#FFF0DF',
                      paddingHorizontal: widthPercentageToDP('7'),
                    },
                  ]}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '500',
                      color: '#000000',
                      lineHeight: 19,
                    }}>
                    Contact
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('UserMessangerScreen')}
                  style={[
                    styles.filtersButton,
                    {
                      backgroundColor: '#FFF0DF',
                      paddingHorizontal: widthPercentageToDP('7'),
                    },
                  ]}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '500',
                      color: '#000000',
                      lineHeight: 19,
                    }}>
                    Messenger
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.filtersButton,
                    {
                      backgroundColor: '#FFF0DF',
                      paddingHorizontal: widthPercentageToDP('7'),
                    },
                  ]}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '500',
                      color: '#000000',
                      lineHeight: 19,
                    }}>
                    Theme
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.filtersButton,
                    {
                      backgroundColor: '#FFF0DF',
                      paddingHorizontal: widthPercentageToDP('7'),
                    },
                  ]}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '500',
                      color: '#000000',
                      lineHeight: 19,
                    }}>
                    Bills
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </View>

        <View>
          <PrimaryButton
            onPress={() => navigation.navigate('GroupSubmitComplaintScreen')}>
            <Text style={styles.signInText}>Submit Complaint</Text>
          </PrimaryButton>
        </View>
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
