import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Bubble, GiftedChat} from 'react-native-gifted-chat';
import {Font_REGULAR} from '../../../../themes/typogrphy';
import {
  AdditionalIcons,
  Alex,
  AutoLayoutHorizontal,
  AutoLayoutHorizontalOrang,
  CameraOrang,
  Emoji,
  LeftArrow,
  Unsplash,
} from '../../../../../assets/icons/icons';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Video from 'react-native-video';
import {useNavigation} from '@react-navigation/native';

const ClientChatScreen = () => {
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
            placeholderTextColor={'#9E9E9E'}
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
          <AutoLayoutHorizontalOrang />
        </TouchableOpacity>
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftArrow />
        </TouchableOpacity>
        <View>
          <Image
            style={{width: 30, height: 30, objectFit: 'cover'}}
            source={Alex}
          />
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: '#000000D9',
            fontFamily: Font_REGULAR,
          }}>
          Alex
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
    paddingHorizontal: 10,
    gap: 4,
    position: 'absolute',
    bottom: -10,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#9E9E9E',
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    paddingHorizontal: 10,
    borderRadius: 15,
    height: heightPercentageToDP('8'),
  },
});

export default ClientChatScreen;
