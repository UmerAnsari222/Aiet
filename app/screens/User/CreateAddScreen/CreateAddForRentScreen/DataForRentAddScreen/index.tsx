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
import {
  LeftArrow,
  MaterialSymbolsMap,
} from '../../../../../../assets/icons/icons';
import {useNavigation} from '@react-navigation/native';
import {Font_REGULAR, Font_SEMIBOLD} from '../../../../../themes/typogrphy';
import {styles} from './style';
import PrimaryButton from '../../../../../components/PrimaryButton';
import PrimaryInput from '../../../../../components/PrimaryInput';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';

export default function DataForRentAddScreen() {
  const [date, setDate] = useState(new Date(Date.now()));
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [rent, setRent] = useState('');
  const [duration, setDuration] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const onChange = (event, selectedDate) => {
    console.log(event);
    console.log(selectedDate);

    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = currentMode => {
    if (!DateTimePickerAndroid) {
      console.log('DateTimePickerAndroid is not available.');
      return;
    }

    DateTimePickerAndroid.open({
      value: date,
      onChange,
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
              Create Ad
            </Text>
          </View>

          <View style={{paddingVertical: heightPercentageToDP('2')}}>
            <View>
              <Text style={styles.label}>Ad Title</Text>

              <View style={styles.inputWrapper}>
                <PrimaryInput
                  value={title}
                  onChange={setTitle}
                  keyboardType="default"
                  placeholder="Type ad title to post"
                />
              </View>
            </View>

            <View>
              <Text style={styles.label}>Set Rent</Text>

              <View style={styles.inputWrapper}>
                <View style={[styles.inputWrapper, {flex: 0}]}>
                  <Text style={{color: '#6C6C6C', fontSize: 14}}>USD</Text>
                </View>
                <View
                  style={{
                    borderLeftColor: '#767676',
                    borderLeftWidth: 1,

                    flex: 1,
                    borderRadius: 15,
                  }}>
                  <PrimaryInput
                    value={rent}
                    onChange={setRent}
                    keyboardType="numeric"
                    placeholder="Enter Rent"
                  />
                </View>
              </View>
            </View>

            <View>
              <Text style={styles.label}>Set Duration</Text>

              <View style={styles.inputWrapper}>
                <PrimaryInput
                  value={duration}
                  onChange={setDuration}
                  keyboardType="default"
                  placeholder="Enter duration"
                />
              </View>
            </View>

            <View>
              <Text style={styles.label}>Bedrooms</Text>

              <View
                style={{
                  marginVertical: heightPercentageToDP('3'),
                }}>
                <ScrollView
                  contentContainerStyle={{gap: 10}}
                  horizontal
                  showsHorizontalScrollIndicator={false}>
                  <TouchableOpacity
                    style={[
                      styles.filtersButton,
                      {
                        backgroundColor: '#F5F5F5',
                        paddingHorizontal: widthPercentageToDP('7'),
                      },
                    ]}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#6C6C6C',
                      }}>
                      1
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.filtersButton,
                      {
                        backgroundColor: '#F5F5F5',
                        paddingHorizontal: widthPercentageToDP('7'),
                      },
                    ]}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#6C6C6C',
                      }}>
                      2
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.filtersButton,
                      {
                        backgroundColor: '#F5F5F5',
                        paddingHorizontal: widthPercentageToDP('7'),
                      },
                    ]}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#6C6C6C',
                      }}>
                      3
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.filtersButton,
                      {
                        backgroundColor: '#F5F5F5',
                        paddingHorizontal: widthPercentageToDP('7'),
                      },
                    ]}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#6C6C6C',
                      }}>
                      4
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.filtersButton,
                      {
                        backgroundColor: '#1B1B1B',
                        paddingHorizontal: widthPercentageToDP('7'),
                      },
                    ]}>
                    <Text
                      style={{fontSize: 16, fontWeight: '600', color: '#fff'}}>
                      5
                    </Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>

            <View>
              <Text style={styles.label}>Washrooms</Text>

              <View
                style={{
                  marginVertical: heightPercentageToDP('3'),
                }}>
                <ScrollView
                  contentContainerStyle={{gap: 10}}
                  horizontal
                  showsHorizontalScrollIndicator={false}>
                  <TouchableOpacity
                    style={[
                      styles.filtersButton,
                      {
                        backgroundColor: '#F5F5F5',
                        paddingHorizontal: widthPercentageToDP('7'),
                      },
                    ]}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#6C6C6C',
                      }}>
                      1
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.filtersButton,
                      {
                        backgroundColor: '#F5F5F5',
                        paddingHorizontal: widthPercentageToDP('7'),
                      },
                    ]}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#6C6C6C',
                      }}>
                      2
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.filtersButton,
                      {
                        backgroundColor: '#F5F5F5',
                        paddingHorizontal: widthPercentageToDP('7'),
                      },
                    ]}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#6C6C6C',
                      }}>
                      3
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.filtersButton,
                      {
                        backgroundColor: '#F5F5F5',
                        paddingHorizontal: widthPercentageToDP('7'),
                      },
                    ]}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#6C6C6C',
                      }}>
                      4
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.filtersButton,
                      {
                        backgroundColor: '#1B1B1B',
                        paddingHorizontal: widthPercentageToDP('7'),
                      },
                    ]}>
                    <Text
                      style={{fontSize: 16, fontWeight: '600', color: '#fff'}}>
                      5
                    </Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>

            <View>
              <Text style={styles.label}>Area Unit</Text>

              <View
                style={{
                  marginVertical: heightPercentageToDP('3'),
                }}>
                <ScrollView
                  contentContainerStyle={{gap: 10}}
                  horizontal
                  showsHorizontalScrollIndicator={false}>
                  <TouchableOpacity
                    style={[
                      styles.filtersButton,
                      {
                        backgroundColor: '#F5F5F5',
                        paddingHorizontal: widthPercentageToDP('7'),
                      },
                    ]}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#6C6C6C',
                      }}>
                      Kanal
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.filtersButton,
                      {
                        backgroundColor: '#F5F5F5',
                        paddingHorizontal: widthPercentageToDP('7'),
                      },
                    ]}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#6C6C6C',
                      }}>
                      Marla
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.filtersButton,
                      {
                        backgroundColor: '#F5F5F5',
                        paddingHorizontal: widthPercentageToDP('7'),
                      },
                    ]}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#6C6C6C',
                      }}>
                      Square Feet
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.filtersButton,
                      {
                        backgroundColor: '#F5F5F5',
                        paddingHorizontal: widthPercentageToDP('7'),
                      },
                    ]}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#6C6C6C',
                      }}>
                      Square Meter
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.filtersButton,
                      {
                        backgroundColor: '#1B1B1B',
                        paddingHorizontal: widthPercentageToDP('7'),
                      },
                    ]}>
                    <Text
                      style={{fontSize: 16, fontWeight: '600', color: '#fff'}}>
                      Square Yard
                    </Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>

            <View>
              <Text style={styles.label}>Property Type</Text>

              <View style={styles.inputWrapper}>
                <PrimaryInput
                  value={propertyType}
                  onChange={setPropertyType}
                  keyboardType="default"
                  placeholder="Enter property type"
                />
              </View>
            </View>

            <View>
              <Text style={styles.label}>Description</Text>

              <View style={styles.inputWrapper}>
                <TextInput
                  style={{maxHeight: 150, height: 150, color: '#6C6C6C'}}
                  placeholder="Describe what are you selling"
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
              <Text style={styles.label}>Date of showing</Text>

              <TouchableOpacity
                style={[styles.inputWrapper, {height: 56}]}
                onPress={showDatepicker}>
                <Text style={{color: '#B9B9B9'}}>{date.toDateString()}</Text>
              </TouchableOpacity>
            </View>

            <View>
              <Text style={styles.label}>Where is your property located </Text>

              <View style={{flexDirection: 'row', gap: 10}}>
                <View style={styles.inputWrapper}>
                  <PrimaryInput
                    value={location}
                    onChange={setLocation}
                    keyboardType="default"
                    placeholder="Enter Location"
                  />
                </View>
                <View style={[styles.inputWrapper, {flex: 0}]}>
                  <MaterialSymbolsMap />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View>
          <PrimaryButton
            onPress={() => navigation.navigate('ForRentReviewAdScreen')}>
            <Text style={styles.signInText}>Review your ad</Text>
          </PrimaryButton>
        </View>
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
