import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {LeftArrow} from '../../../../assets/icons/icons';
import {Font_REGULAR} from '../../../themes/typogrphy';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';

export default function UserNewGroupScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
                fontSize: 20,
                fontWeight: '600',
                color: '#000000D9',
                fontFamily: Font_REGULAR,
              }}>
              Create Group
            </Text>
          </View>

          <View style={{gap: 20, marginTop: heightPercentageToDP('6')}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('UserCreateNewGroupScreen')}
              style={styles.buttons}>
              <Text style={styles.buttonsText}>Housing {'\n'} Association</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.buttons}>
              <Text style={styles.buttonsText}>Welfare {'\n'} Association</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
              <Text style={styles.buttonsText}>Collective</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
              <Text style={styles.buttonsText}>School Collective</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
