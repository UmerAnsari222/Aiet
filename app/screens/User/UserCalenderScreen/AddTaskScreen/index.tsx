import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {HeadphoneMic, LeftArrow} from '../../../../../assets/icons/icons';
import {useNavigation} from '@react-navigation/native';
import {Font_REGULAR} from '../../../../themes/typogrphy';
import {styles} from './style';
import PrimaryButton from '../../../../components/PrimaryButton';

import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';

export default function AddTaskScreen() {
  const [date, setDate] = useState(new Date(Date.now()));
  const [time, setTime] = useState(new Date().toString());
  const navigation = useNavigation();

  const onChange = (event, selectedDate) => {
    console.log(event);
    console.log(selectedDate);

    const currentDate = selectedDate;
    setDate(currentDate);
  };
  const onTimeChange = (event, selectedTime) => {
    console.log(event);
    console.log(selectedTime);

    const currentTime = selectedTime;
    setTime(currentTime);
  };

  const showMode = currentMode => {
    if (!DateTimePickerAndroid) {
      console.log('DateTimePickerAndroid is not available.');
      return;
    }

    DateTimePickerAndroid.open({
      value: date,
      onChange: currentMode == 'date' ? onChange : onTimeChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

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
            // height: heightPercentageToDP('100'),
            justifyContent: 'space-between',
            backgroundColor: 'red',
          }}> */}
        <View>
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
              Add Task
            </Text>
          </View>

          <View
            style={{
              marginBottom: heightPercentageToDP('10'),
            }}>
            <TextInput
              style={styles.wrapper}
              placeholder="Task Title"
              placeholderTextColor={'#B9B9B9'}
            />

            <View style={styles.wrapper}>
              <TouchableOpacity style={{flex: 1}} onPress={showDatepicker}>
                <Text style={{color: '#B9B9B9'}}>{date.toDateString()}</Text>
              </TouchableOpacity>
              {/* <BagOne /> */}
            </View>
            <View style={styles.wrapper}>
              <TouchableOpacity style={{flex: 1}} onPress={showTimepicker}>
                <Text style={{color: '#B9B9B9'}}>{time.toString()}</Text>
              </TouchableOpacity>
              {/* <BagOne /> */}
            </View>
          </View>
        </View>

        <View>
          <PrimaryButton onPress={() => {}}>
            <Text style={styles.signInText}>Add</Text>
          </PrimaryButton>
        </View>
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
