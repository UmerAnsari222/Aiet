import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {
  Filter,
  IconoirArrow,
  LeftArrow,
  Search,
} from '../../../../../assets/icons/icons';
import {
  Font_BLACK,
  Font_BOLD,
  Font_REGULAR,
} from '../../../../themes/typogrphy';
import {styles} from './style';
import PropertyCard from '../../../../components/PropertyCard';
import SmPropertyCard from '../../../../components/SmPropertyCard';

const UserForRentSearchScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
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
          <View style={styles.inputWrapper}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
                gap: 4,
              }}>
              <Search />
              <TextInput
                style={{color: '#E3851E', flex: 1}}
                keyboardType="default"
                placeholder="Search"
                placeholderTextColor={'#E3851E'}
              />
            </View>
            <TouchableOpacity>
              <Filter />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={styles.recentSearchText}>Recent Searches</Text>

          <View style={{marginVertical: heightPercentageToDP('3')}}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('UserForSalePopularScreen', {
                  search: 'house',
                })
              }
              style={styles.flexItems}>
              <Text style={styles.recentSearchText}>Houses</Text>
              <IconoirArrow />
            </TouchableOpacity>
            <TouchableOpacity style={styles.flexItems}>
              <Text style={styles.recentSearchText}>Plots</Text>
              <IconoirArrow />
            </TouchableOpacity>
            <TouchableOpacity style={styles.flexItems}>
              <Text style={styles.recentSearchText}>Commercial Buildings</Text>
              <IconoirArrow />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text
            style={[
              styles.recentSearchText,
              {fontFamily: Font_BOLD, fontWeight: 'bold'},
            ]}>
            Recently Viewed
          </Text>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.propertySearchWrapper}>
              {[0, 1, 2, 4, 5, 6].map(i => (
                <SmPropertyCard key={i} />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserForRentSearchScreen;
