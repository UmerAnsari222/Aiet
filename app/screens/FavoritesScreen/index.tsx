import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {LeftArrow, Search} from '../../../assets/icons/icons';
import {Font_REGULAR} from '../../themes/typogrphy';
import PropertyCard from '../../components/PropertyCard';
import FavoritePropertyCard from '../../components/FavoritePropertyCard';

const FavoritesScreen = () => {
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
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#000000D9',
              fontFamily: Font_REGULAR,
            }}>
            Favorites
          </Text>
        </View>

        <ScrollView
          style={{marginTop: heightPercentageToDP('4')}}
          showsVerticalScrollIndicator={false}>
          <FavoritePropertyCard
            onPress={() =>
              navigation.navigate('PropertyDetailScreen', {
                id: '63862836486284',
              })
            }
          />
          <FavoritePropertyCard
            onPress={() =>
              navigation.navigate('PropertyDetailScreen', {
                id: '63862836486284',
              })
            }
          />
          <FavoritePropertyCard
            onPress={() =>
              navigation.navigate('PropertyDetailScreen', {
                id: '63862836486284',
              })
            }
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FavoritesScreen;
