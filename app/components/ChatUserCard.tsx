import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Font_SEMIBOLD, Font_THIN} from '../themes/typogrphy';
import {Alex} from '../../assets/icons/icons';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

type ChatUserCardProps = {
  message: string;
  name: string;
  dateTime: string;
  Avatar: any;
};

const ChatUserCard = ({Avatar, dateTime, message, name}: ChatUserCardProps) => {
  //   const message = 'My pleasure. All the best for';

  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ClientChatScreen', {id: '5252252352533'})
      }
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginVertical: heightPercentageToDP('1.5'),
      }}>
      <View>
        <Image
          style={{width: 60, height: 60, objectFit: 'cover'}}
          source={Avatar}
        />
      </View>
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: Font_SEMIBOLD,
            fontWeight: '700',
            color: '#000000',
          }}>
          {name}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: Font_SEMIBOLD,
            fontWeight: '600',
            color: '#000000',
            lineHeight: 19.6,
          }}>
          {message.length >= 20
            ? `${message.slice(0, 20)} \n ${message.slice(21, 30)}...`
            : message}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            fontFamily: Font_THIN,
            color: '#6F6F6F',
            lineHeight: 16.8,
          }}>
          Today,
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            fontFamily: Font_THIN,
            color: '#6F6F6F',
            lineHeight: 16.8,
          }}>
          10.00 AM
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatUserCard;
