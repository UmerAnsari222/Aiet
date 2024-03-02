import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Filter, LeftArrow, Search} from '../../../../../assets/icons/icons';
import {styles} from './style';
import PropertyCard from '../../../../components/PropertyCard';

const UserForSaleFillterSearchScreen = () => {
  const route = useRoute();

  const {filter} = route.params;

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
        </View>

        <View>
          <Text style={styles.recentSearchText}>Filtered Results For buy</Text>
          <Text style={styles.recentSearchCountText}>Showing 150 Ads</Text>

          <View style={{marginVertical: heightPercentageToDP('3')}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <PropertyCard
                onPress={() =>
                  navigation.navigate('PropertyDetailScreen', {
                    id: '63862836486284',
                  })
                }
              />
              <PropertyCard
                onPress={() =>
                  navigation.navigate('PropertyDetailScreen', {
                    id: '63862836486284',
                  })
                }
              />
              <PropertyCard
                onPress={() =>
                  navigation.navigate('PropertyDetailScreen', {
                    id: '63862836486284',
                  })
                }
              />
              <PropertyCard
                onPress={() =>
                  navigation.navigate('PropertyDetailScreen', {
                    id: '63862836486284',
                  })
                }
              />
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserForSaleFillterSearchScreen;
