import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Font_REGULAR} from '../../../themes/typogrphy';
import {AddButton} from '../../../../assets/icons/icons';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import TaskCard from '../../../components/TaskCard';
import {useNavigation} from '@react-navigation/native';

export default function UserCalenderScreen() {
  const [selected, setSelected] = useState('');
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
                Calendar
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddTaskScreen')}>
              <AddButton />
            </TouchableOpacity>
          </View>

          <View
            style={{
              borderColor: '#E3851E',
              borderWidth: 1,
              paddingHorizontal: widthPercentageToDP('4'),
              paddingVertical: heightPercentageToDP('2'),
              borderRadius: 12,
              marginTop: heightPercentageToDP('4'),
            }}>
            <Calendar
              onDayPress={day => {
                setSelected(day.dateString);
              }}
              markedDates={{
                [selected]: {
                  selected: true,
                  disableTouchEvent: true,
                  selectedColor: '#B43DB7',
                },
              }}
              hideArrows={true}
              theme={{
                dayTextColor: '#000',
                todayTextColor: '#FFFFFF',
                todayBackgroundColor: '#B43DB7',
              }}
            />
          </View>

          <View style={{paddingVertical: heightPercentageToDP('2')}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#000000D9',
                fontFamily: Font_REGULAR,
                textAlign: 'left',
              }}>
              Daily Tasks
            </Text>
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
