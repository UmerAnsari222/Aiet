import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {MutableRefObject, ReactElement, useEffect, useRef} from 'react';
import {
  Bar,
  BrownLogo,
  CompanyAvatar,
  UserAvatar,
} from '../../../assets/icons/icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';

import RBSheet from 'react-native-raw-bottom-sheet';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

const WelcomeScreen = () => {
  const navigation = useNavigation<any>();

  function handelCompanyNavigation() {
    navigation.navigate('ChooseCompanyScreen', {type: 'Company'});
  }
  function handelUserNavigation() {
    navigation.navigate('LoginScreen', {type: 'User'});
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome To AIET</Text>
        <Image source={BrownLogo} style={{height: 136, width: 141}} />

        {/* <RBSheet
          ref={refRBSheet}
          closeOnDragDown={false}
          closeOnPressMask={false}
          dragFromTopOnly={false}
          customStyles={{
            container: {
              borderTopStartRadius: 20,
              borderTopEndRadius: 20,
              borderColor: '#130F26',
              borderWidth: 0.3,
            },
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}>
          <View style={{alignItems: 'center', marginVertical: 5}}>
            <Bar />
          </View>
          <View style={styles.bottomSheetWrapper}>
            <Text style={styles.bottomSheetHeading}>
              Who are you as a user?
            </Text>

            <View style={styles.profileButtonsWrapper}>
              <TouchableOpacity
                onPress={handelUserNavigation}
                style={styles.profileButtons}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  locations={[0, 0.4966, 0.9996]}
                  colors={['#7C4002', '#000000', '#7C4002']}
                  style={{
                    flex: 1,
                    paddingVertical: heightPercentageToDP('2.5'),
                    borderRadius: 15,
                  }}>
                  <View style={styles.buttonView}>
                    <Image source={UserAvatar} height={40} width={40} />
                    <Text style={styles.profileButtonsText}>User</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.profileButtons}
                onPress={handelCompanyNavigation}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  locations={[0, 0.4966, 0.9996]}
                  colors={['#7C4002', '#000000', '#7C4002']}
                  style={{
                    flex: 1,
                    paddingVertical: heightPercentageToDP('2.5'),
                    borderRadius: 15,
                  }}>
                  <View style={styles.buttonView}>
                    <Image source={CompanyAvatar} height={40} width={40} />
                    <Text style={styles.profileButtonsText}>Company</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </RBSheet> */}

        <View style={styles.sheet}>
          <View style={{alignItems: 'center', marginVertical: 5}}>
            <Bar />
          </View>
          <View style={styles.bottomSheetWrapper}>
            <Text style={styles.bottomSheetHeading}>
              Who are you as a user?
            </Text>

            <View style={styles.profileButtonsWrapper}>
              <TouchableOpacity
                onPress={handelUserNavigation}
                style={styles.profileButtons}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  locations={[0, 0.4966, 0.9996]}
                  colors={['#7C4002', '#000000', '#7C4002']}
                  style={{
                    flex: 1,
                    paddingVertical: heightPercentageToDP('2.5'),
                    borderRadius: 15,
                  }}>
                  <View style={styles.buttonView}>
                    <Image source={UserAvatar} height={40} width={40} />
                    <Text style={styles.profileButtonsText}>User</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.profileButtons}
                onPress={handelCompanyNavigation}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  locations={[0, 0.4966, 0.9996]}
                  colors={['#7C4002', '#000000', '#7C4002']}
                  style={{
                    flex: 1,
                    paddingVertical: heightPercentageToDP('2.5'),
                    borderRadius: 15,
                  }}>
                  <View style={styles.buttonView}>
                    <Image source={CompanyAvatar} height={40} width={40} />
                    <Text style={styles.profileButtonsText}>Company</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
