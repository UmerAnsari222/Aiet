import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Alex, CircleMore, LeftArrow} from '../../../../assets/icons/icons';
import {
  Font_REGULAR,
  Font_SEMIBOLD,
  Font_THIN,
} from '../../../themes/typogrphy';
import ChatUserCard from '../../../components/ChatUserCard';

export default function UserChatsScreen() {
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '700',
                color: '#000000D9',
                fontFamily: Font_REGULAR,
                textAlign: 'center',
              }}>
              Chats
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CircleMore />
          </TouchableOpacity>
        </View>

        <ScrollView
          style={{marginTop: heightPercentageToDP('2')}}
          showsVerticalScrollIndicator={false}>
          <ChatUserCard
            Avatar={Alex}
            message="My pleasure. All the best for"
            dateTime=""
            name="Alex"
          />
          <ChatUserCard
            Avatar={Alex}
            message="My pleasure. All the best for"
            dateTime=""
            name="Alex"
          />
          <ChatUserCard
            Avatar={Alex}
            message="My pleasure. All the best for"
            dateTime=""
            name="Alex"
          />
          <ChatUserCard
            Avatar={Alex}
            message="My pleasure. All the best for"
            dateTime=""
            name="Alex"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
