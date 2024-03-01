import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {LeftArrow} from '../../../../../assets/icons/icons';
import {Font_REGULAR, Font_SEMIBOLD} from '../../../../themes/typogrphy';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';

import MultiSlider from '@ptomasroos/react-native-multi-slider';

const UserForRentFillterScreen = () => {
  const [values, setValues] = useState([0, 2300]);
  const [size, setSize] = useState([0, 2300]);

  const navigation = useNavigation();

  const sliderValuesChange = values => {
    setValues(values);
  };
  const sliderSizeChange = size => {
    setSize(size);
  };

  const CustomLabel = value => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 320,
        }}>
        <View
          style={{
            backgroundColor: '#D07D36',
            paddingHorizontal: 28,
            paddingVertical: 10,
            borderRadius: 3.4,
          }}>
          <Text style={{color: '#FFFFFF'}}>${values[0]} </Text>
        </View>
        <View
          style={{
            backgroundColor: '#D07D36',
            paddingHorizontal: 28,
            paddingVertical: 10,
            borderRadius: 3.4,
          }}>
          <Text style={{color: '#FFFFFF'}}>${values[1]} </Text>
        </View>
      </View>
    );
  };

  const CustomLabelPrpertySize = value => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 320,
        }}>
        <View
          style={{
            backgroundColor: '#D07D36',
            paddingHorizontal: 28,
            paddingVertical: 10,
            borderRadius: 3.4,
          }}>
          <Text style={{color: '#FFFFFF'}}>{size[0]} </Text>
        </View>
        <View
          style={{
            backgroundColor: '#D07D36',
            paddingHorizontal: 28,
            paddingVertical: 10,
            borderRadius: 3.4,
          }}>
          <Text style={{color: '#FFFFFF'}}>{size[1]} </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
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
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <LeftArrow />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: '#000000D9',
                fontFamily: Font_REGULAR,
              }}>
              Filters
            </Text>
          </View>

          <View style={{marginVertical: heightPercentageToDP('2')}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: '#000000D9',
                fontFamily: Font_SEMIBOLD,
              }}>
              Property type
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                marginVertical: heightPercentageToDP('3'),
              }}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                locations={[0, 0.4966, 0.9996]}
                colors={['#F5F5F5', '#F5F5F5']}
                style={{
                  borderRadius: 4,
                }}>
                <TouchableOpacity style={styles.filtersButton}>
                  <Text
                    style={{fontSize: 16, fontWeight: '600', color: '#000000'}}>
                    All
                  </Text>
                </TouchableOpacity>
              </LinearGradient>

              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                locations={[0, 0.4966, 0.9996]}
                colors={['#B86015', '#E0904C']}
                style={{
                  borderRadius: 4,
                }}>
                <TouchableOpacity style={styles.filtersButton}>
                  <Text
                    style={{fontSize: 16, fontWeight: '600', color: '#fff'}}>
                    House
                  </Text>
                </TouchableOpacity>
              </LinearGradient>

              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                locations={[0, 0.4966, 0.9996]}
                colors={['#F5F5F5', '#F5F5F5']}
                style={{
                  borderRadius: 4,
                }}>
                <TouchableOpacity style={styles.filtersButton}>
                  <Text
                    style={{fontSize: 16, fontWeight: '600', color: '#000000'}}>
                    Apartment
                  </Text>
                </TouchableOpacity>
              </LinearGradient>

              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                locations={[0, 0.4966, 0.9996]}
                colors={['#F5F5F5', '#F5F5F5']}
                style={{
                  borderRadius: 4,
                }}>
                <TouchableOpacity style={styles.filtersButton}>
                  <Text
                    style={{fontSize: 16, fontWeight: '600', color: '#000000'}}>
                    Residential Plot
                  </Text>
                </TouchableOpacity>
              </LinearGradient>

              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                locations={[0, 0.4966, 0.9996]}
                colors={['#F5F5F5', '#F5F5F5']}
                style={{
                  borderRadius: 4,
                }}>
                <TouchableOpacity style={styles.filtersButton}>
                  <Text
                    style={{fontSize: 16, fontWeight: '600', color: '#000000'}}>
                    Commercial Plot
                  </Text>
                </TouchableOpacity>
              </LinearGradient>

              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                locations={[0, 0.4966, 0.9996]}
                colors={['#F5F5F5', '#F5F5F5']}
                style={{
                  borderRadius: 4,
                }}>
                <TouchableOpacity style={styles.filtersButton}>
                  <Text
                    style={{fontSize: 16, fontWeight: '600', color: '#000000'}}>
                    Commercial Property
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>

          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: '#000000D9',
                fontFamily: Font_SEMIBOLD,
              }}>
              Bedrooms
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                justifyContent: 'space-between',
                marginVertical: heightPercentageToDP('3'),
              }}>
              <TouchableOpacity
                style={[
                  styles.filtersButton,
                  {
                    backgroundColor: '#F5F5F5',
                    paddingHorizontal: widthPercentageToDP('7'),
                  },
                ]}>
                <Text
                  style={{fontSize: 16, fontWeight: '600', color: '#000000'}}>
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
                  style={{fontSize: 16, fontWeight: '600', color: '#000000'}}>
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
                  style={{fontSize: 16, fontWeight: '600', color: '#000000'}}>
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
                  style={{fontSize: 16, fontWeight: '600', color: '#000000'}}>
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
                <Text style={{fontSize: 16, fontWeight: '600', color: '#fff'}}>
                  5+
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{marginVertical: heightPercentageToDP('2')}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: '#000000D9',
                fontFamily: Font_SEMIBOLD,
              }}>
              Bathrooms
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                justifyContent: 'space-between',
                marginVertical: heightPercentageToDP('3'),
              }}>
              <TouchableOpacity
                style={[
                  styles.filtersButton,
                  {
                    backgroundColor: '#F5F5F5',
                    paddingHorizontal: widthPercentageToDP('7'),
                  },
                ]}>
                <Text
                  style={{fontSize: 16, fontWeight: '600', color: '#000000'}}>
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
                  style={{fontSize: 16, fontWeight: '600', color: '#000000'}}>
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
                  style={{fontSize: 16, fontWeight: '600', color: '#000000'}}>
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
                  style={{fontSize: 16, fontWeight: '600', color: '#000000'}}>
                  4
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: '#000000D9',
                  fontFamily: Font_SEMIBOLD,
                }}>
                Price Range
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: '#000000D9',
                  fontFamily: Font_SEMIBOLD,
                }}>
                $400 - $2300
              </Text>
            </View>

            <View style={{marginTop: 20}}>
              <MultiSlider
                values={values}
                sliderLength={320}
                onValuesChange={sliderValuesChange}
                min={values[0]}
                max={values[1]}
                step={1}
                allowOverlap
                snapped
                selectedStyle={{
                  backgroundColor: '#D07D36',
                  height: 8,
                  borderRadius: 11,
                }}
                markerStyle={{
                  backgroundColor: '#D07D36',
                  height: 20,
                  width: 20,
                  marginTop: 5,
                }}
                containerStyle={{height: 40}}
                enableLabel={true}
                customLabel={CustomLabel}
                trackStyle={{
                  backgroundColor: '#1B1B1B',
                  height: 8,
                  borderRadius: 11,
                }}
              />
            </View>
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: '#000000D9',
                  fontFamily: Font_SEMIBOLD,
                }}>
                Property Size
              </Text>
              {/* <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: '#000000D9',
                  fontFamily: Font_SEMIBOLD,
                }}>
                $400 - $2300
              </Text> */}
            </View>

            <View style={{marginTop: 20}}>
              <MultiSlider
                values={size}
                sliderLength={320}
                onValuesChange={sliderSizeChange}
                min={size[0]}
                max={size[1]}
                step={1}
                allowOverlap
                snapped
                selectedStyle={{
                  backgroundColor: '#D07D36',
                  height: 8,
                  borderRadius: 11,
                }}
                markerStyle={{
                  backgroundColor: '#D07D36',
                  height: 20,
                  width: 20,
                  marginTop: 5,
                }}
                containerStyle={{height: 40}}
                enableLabel={true}
                customLabel={CustomLabelPrpertySize}
                trackStyle={{
                  backgroundColor: '#1B1B1B',
                  height: 8,
                  borderRadius: 11,
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: widthPercentageToDP('2'),
              }}>
              <TouchableOpacity>
                <Text
                  style={{color: '#D07D36', fontSize: 15, fontWeight: '600'}}>
                  Reset
                </Text>
              </TouchableOpacity>

              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                locations={[0, 0.4966, 0.9996]}
                colors={['#7C4002', '#000000', '#7C4002']}
                style={{
                  borderRadius: 15,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('UserForSaleFillterSearchScreen', {
                      filter: 'Filter',
                    })
                  }
                  style={[
                    styles.filtersButton,
                    {paddingHorizontal: widthPercentageToDP('12')},
                  ]}>
                  <Text
                    style={{fontSize: 16, fontWeight: '600', color: '#FFF'}}>
                    Apply Filters
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserForRentFillterScreen;
