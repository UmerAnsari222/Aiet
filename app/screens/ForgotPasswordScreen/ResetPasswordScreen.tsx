import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {styles} from './style';
import {Confirm, Hide, Lock} from '../../../assets/icons/icons';
import PrimaryInput from '../../components/PrimaryInput';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import PasswordInput from '../../components/PasswordInput';

const ResetPasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isSecure, setIsSecure] = useState(true);
  const [isConfirmSecure, setIsConfirmSecure] = useState(true);

  const navigation = useNavigation();

  function handelPassword() {
    setIsSecure(prev => {
      return !prev;
    });
  }

  function handelConfirmPassword() {
    setIsConfirmSecure(prev => {
      return !prev;
    });
  }

  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          alignSelf: 'center',
          width: widthPercentageToDP('90%'),
        }}
        showsVerticalScrollIndicator={false}>
        <View style={{paddingVertical: heightPercentageToDP('6')}}>
          <View style={{marginTop: widthPercentageToDP('4%')}}>
            <Text style={styles.heading}>Forgot Password</Text>
            <Text style={styles.paragraph}>
              Enter your email so that we can send you an otp code to reset your
              password.
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: heightPercentageToDP('4'),
            }}>
            <Confirm />
          </View>

          <View style={styles.inputWrapper}>
            <Lock fill={'#9E9E9E'} />
            <PasswordInput
              value={password}
              onChange={setPassword}
              keyboardType="default"
              placeholder="Password"
              secureTextEntry={isSecure}
            />
            <TouchableOpacity onPress={handelPassword}>
              <Hide fill={'#9E9E9E'} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputWrapper}>
            <Lock fill={'#9E9E9E'} />
            <PasswordInput
              value={confirmPassword}
              onChange={setConfirmPassword}
              keyboardType="default"
              placeholder="Confirm Password"
              secureTextEntry={isConfirmSecure}
            />
            <TouchableOpacity onPress={handelConfirmPassword}>
              <Hide fill={'#9E9E9E'} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPasswordScreen')}
            style={{
              height: heightPercentageToDP('8'),
              marginTop: heightPercentageToDP('4'),
            }}>
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
              <Text style={styles.signInText}>Reset Password</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ResetPasswordScreen;
