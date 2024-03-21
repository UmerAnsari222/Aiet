import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {LeftArrow} from '../../../../../assets/icons/icons';
import {Font_REGULAR} from '../../../../themes/typogrphy';
import PrimaryInput from '../../../../components/PrimaryInput';
import PrimaryButton from '../../../../components/PrimaryButton';
import {styles} from './style';

export default function GroupSubmitComplaintScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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
                fontSize: 16,
                fontWeight: '600',
                color: '#000000D9',
                fontFamily: Font_REGULAR,
                flex: 1,
              }}>
              Submit Complaint
            </Text>
          </View>

          <View style={{paddingVertical: heightPercentageToDP('2')}}>
            <View>
              <View style={styles.inputWrapper}>
                <PrimaryInput
                  value={name}
                  onChange={setName}
                  keyboardType="default"
                  placeholder="Your Name"
                />
              </View>
            </View>

            <View>
              <View style={styles.inputWrapper}>
                <PrimaryInput
                  value={email}
                  onChange={setEmail}
                  keyboardType="email-address"
                  placeholder="Your Email"
                />
              </View>
            </View>

            <View>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={{maxHeight: 150, height: 150, color: '#6C6C6C'}}
                  placeholder="Write your complain"
                  placeholderTextColor={'#B9B9B9'}
                  keyboardType="default"
                  multiline={true}
                  textAlignVertical="top"
                  value={description}
                  onChangeText={e => setDescription(e)}
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
            <Text style={styles.signInText}>Submit Complaint</Text>
          </PrimaryButton>
        </View>
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
