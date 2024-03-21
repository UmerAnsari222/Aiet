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
import {LeftArrow} from '../../../../assets/icons/icons';
import {Font_REGULAR} from '../../../themes/typogrphy';
import PropertyCard from '../../../components/PropertyCard';
import {styles} from './style';

export default function MyAdScreen() {
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
            My Ads
          </Text>
        </View>

        <ScrollView horizontal>
          <View style={styles.inputWrapper}>
            <TouchableOpacity style={styles.activeButton}>
              <Text style={styles.activeButtonText}>For Sale</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.notActiveButton}>
              <Text style={styles.notActiveButtonText}>For Sale</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.notActiveButton}>
              <Text style={styles.notActiveButtonText}>For Sale</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

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
    </SafeAreaView>
  );
}
