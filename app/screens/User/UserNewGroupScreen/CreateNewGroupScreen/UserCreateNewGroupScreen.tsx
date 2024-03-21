import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {LeftArrow, SelectImage} from '../../../../../assets/icons/icons';
import {Font_REGULAR} from '../../../../themes/typogrphy';
import {useNavigation} from '@react-navigation/native';
import {styles} from './index';
import PrimaryInput from '../../../../components/PrimaryInput';
import PrimaryButton from '../../../../components/PrimaryButton';

export default function UserCreateNewGroupScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView
        contentContainerStyle={{
          width: widthPercentageToDP('90'),
          alignSelf: 'center',
          paddingVertical: heightPercentageToDP('4'),
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
        showsVerticalScrollIndicator={false}>
        {/* <View
      style={{
        flex: 1,
        width: widthPercentageToDP('90'),
        alignSelf: 'center',
        paddingVertical: heightPercentageToDP('4'),
      }}> */}
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <LeftArrow />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: '#000000D9',
                fontFamily: Font_REGULAR,
                textAlign: 'center',
                flex: 1,
              }}>
              Create Group
            </Text>
          </View>

          <View style={{paddingVertical: heightPercentageToDP('2')}}>
            <View>
              <View style={styles.inputWrapper}>
                <PrimaryInput
                  value={title}
                  onChange={setTitle}
                  keyboardType="default"
                  placeholder="Title of group"
                />
              </View>
            </View>

            <View style={styles.uploadImageWapper}>
              <SelectImage />
              <Text style={styles.uploadImageMinimText10}>
                Upload Group Profile Picture
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('UploadImageForRentAddScreen')
                }
                style={styles.uploadButton}>
                <Text
                  style={{fontSize: 9.75, fontWeight: '600', lineHeight: 27}}>
                  Upload Photos
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              {/* <Text style={styles.label}>Description</Text> */}

              <View style={styles.inputWrapper}>
                <TextInput
                  style={{maxHeight: 150, height: 150, color: '#6C6C6C'}}
                  placeholder="Add Description"
                  placeholderTextColor={'#B9B9B9'}
                  keyboardType="default"
                  multiline={true}
                  textAlignVertical="top"
                  value={description}
                  onChangeText={e => setDescription(e)}
                />
              </View>
            </View>

            <View>
              <View style={styles.inputWrapper}>
                <PrimaryInput
                  value={title}
                  onChange={setTitle}
                  keyboardType="default"
                  placeholder="Add Members"
                />
              </View>
            </View>
          </View>
        </View>

        <View>
          <PrimaryButton
            onPress={() =>
              navigation.navigate('HousingAssociationGroupScreen')
            }>
            <Text style={styles.signInText}>Create Group</Text>
          </PrimaryButton>
        </View>
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
