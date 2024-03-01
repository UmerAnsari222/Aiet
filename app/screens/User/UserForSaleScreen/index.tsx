import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Filter, LeftArrow, Search} from '../../../../assets/icons/icons';
import {Font_REGULAR} from '../../../themes/typogrphy';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';
import PropertyCard from '../../../components/PropertyCard';

const UserForSaleScreen = () => {
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
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#000000D9',
              fontFamily: Font_REGULAR,
            }}>
            For Sale
          </Text>
        </View>

        <View style={styles.inputWrapper}>
          <TouchableOpacity
            onPress={() => navigation.navigate('UserForSaleSearchScreen')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
              gap: 4,
            }}>
            <Search />
            <Text style={{color: '#E3851E'}}>Search</Text>
            {/* <TextInput
              style={{color: '#E3851E'}}
              keyboardType="default"
              placeholder="Search"
              placeholderTextColor={'#E3851E'}
            /> */}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('UserForSaleFillterScreen')}>
            <Filter />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default UserForSaleScreen;
