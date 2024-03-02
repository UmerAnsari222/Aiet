import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import {
  Actions,
  GiftedChat,
  InputToolbar,
  Bubble,
} from 'react-native-gifted-chat';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {
  AdditionalIcons,
  AutoLayoutHorizontal,
  CameraOrang,
  Emoji,
  LeftArrow,
  SendIcon,
  Unsplash,
} from '../../../assets/icons/icons';
import {Font_REGULAR} from '../../themes/typogrphy';
import {useNavigation} from '@react-navigation/native';

const CustomInputToolbar = ({text, onChangeText}) => {
  console.log(text);
  console.log(onChangeText);

  const [message, setMessage] = useState('');

  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputWrapper}>
        <Emoji />
        <TextInput
          placeholder="Type a message..."
          style={styles.textInput}
          multiline
          autoFocus
        />
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
          <TouchableOpacity>
            <AdditionalIcons />
          </TouchableOpacity>
          <TouchableOpacity>
            <CameraOrang />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => console.log(text)}>
        <AutoLayoutHorizontal />
      </TouchableOpacity>
    </View>
  );
};

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  useEffect(() => {
    console.log(text);
  }, [text]);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  function handelSend(props) {
    props.onSend([
      {
        _id: new Date().getTime(),
        text: props.text,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);

    props.onTextChanged('');
  }

  const customInputToolbar = props => {
    return (
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Emoji />
          <TextInput
            placeholder="Type a message..."
            style={styles.textInput}
            multiline
            autoFocus
            value={props.text}
            onChangeText={props.onTextChanged}
          />
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
            <TouchableOpacity>
              <AdditionalIcons />
            </TouchableOpacity>
            <TouchableOpacity>
              <CameraOrang />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => handelSend(props)}>
          <AutoLayoutHorizontal />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, paddingVertical: heightPercentageToDP('2')}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          paddingHorizontal: widthPercentageToDP('4'),
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftArrow />
        </TouchableOpacity>
        <View>
          <Image source={Unsplash} />
        </View>
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

      <GiftedChat
        messages={messages}
        onSend={newMessages => onSend(newMessages)}
        user={{_id: 1}}
        renderInputToolbar={props => customInputToolbar(props)}
        renderBubble={props => (
          <Bubble
            {...props}
            wrapperStyle={{
              left: {
                backgroundColor: '#E9E9E9E5',
              },
              right: {
                backgroundColor: '#B86015',
              },
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 10,
    gap: 4,
  },
  textInput: {
    flex: 1,
    borderRadius: 16,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1B1B1B',
    paddingHorizontal: 10,
    borderRadius: 15,
    height: heightPercentageToDP('8'),
  },
});

export default ChatScreen;
