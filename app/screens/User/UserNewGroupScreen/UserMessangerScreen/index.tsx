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

import {useNavigation} from '@react-navigation/native';

import Video from 'react-native-video';
import {
  AdditionalIcons,
  AutoLayoutHorizontal,
  CameraOrang,
  Emoji,
  LeftArrow,
  PlusIcon,
  Unsplash,
} from '../../../../../assets/icons/icons';
import {Font_REGULAR} from '../../../../themes/typogrphy';

const UserMessangerScreen = () => {
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
          <TextInput
            placeholder="Type a message..."
            placeholderTextColor={'#E3851E'}
            style={styles.textInput}
            multiline
            autoFocus
            value={props.text}
            onChangeText={props.onTextChanged}
          />
        </View>
        <View
          style={{
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={() => handelSend(props)}>
            {/* <PlusIcon /> */}
            <Text style={{fontSize: 24, fontWeight: '700', color: '#000'}}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderMessageVideo = (props: any) => {
    // console.log(props);

    const {currentMessage} = props;
    console.log(currentMessage);

    return (
      <View style={{height: 200, width: 200}}>
        <Video
          style={{width: '100%', height: '100%', borderRadius: 4}}
          controls={true}
          resizeMode="cover"
          source={{uri: currentMessage?.video}}
        />
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingVertical: heightPercentageToDP('2'),
        backgroundColor: '#FFF',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          paddingHorizontal: widthPercentageToDP('4'),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            flex: 1,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <LeftArrow />
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{width: 23, height: 23, objectFit: 'cover'}}
              source={Unsplash}
            />
            <Image
              style={{width: 23, height: 23, objectFit: 'cover'}}
              source={Unsplash}
            />
            <Image
              style={{width: 23, height: 23, objectFit: 'cover'}}
              source={Unsplash}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <PlusIcon />
        </TouchableOpacity>
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
                backgroundColor: '#FFF5E9',
                marginBottom: heightPercentageToDP('1.4'),
              },
              right: {
                backgroundColor: '#E3851E',
                marginBottom: heightPercentageToDP('1'),
              },
            }}
          />
        )}
        renderMessageVideo={props => renderMessageVideo(props)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    gap: 4,
    position: 'absolute',
    bottom: -10,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#E3851E',
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF5E9',
    paddingHorizontal: 10,
    borderRadius: 15,
    height: heightPercentageToDP('8'),
  },
  addButton: {
    backgroundColor: '#F5F5F5',
    width: 64,
    height: 33,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserMessangerScreen;
