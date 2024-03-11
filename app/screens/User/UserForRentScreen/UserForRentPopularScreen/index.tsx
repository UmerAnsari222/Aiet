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

const UserForRentPopularScreen = () => {
  const route = useRoute();

  const {search} = route.params;

  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
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
          <Text style={styles.recentSearchText}>Results for {search}</Text>
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

export default UserForRentPopularScreen;
