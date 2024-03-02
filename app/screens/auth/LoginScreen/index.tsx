import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Hide, Lock, MessageGray, SmLogo} from '../../../../assets/icons/icons';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {styles} from './style';
import PrimaryInput from '../../../components/PrimaryInput';
import PasswordInput from '../../../components/PasswordInput';
import {Font_BLACK, Font_BOLD} from '../../../themes/typogrphy';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import PrimaryButton from '../../../components/PrimaryButton';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSecure, setIsSecure] = useState(true);

  const navigation = useNavigation();

  function handelPassword() {
    setIsSecure(prev => {
      return !prev;
    });
  }

  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={{justifyContent: 'space-between', flex: 1}}>
          <View>
            <View>
              <Image source={SmLogo} />
            </View>

            <View style={styles.headingWrapper}>
              <Text style={styles.onboardingText}>
                Let's begin the onboarding process.
              </Text>
              <Text style={styles.continueText}>Sign In to continue</Text>
            </View>

            <View style={styles.inputWrapper}>
              <MessageGray fill={'#9E9E9E'} />
              <PrimaryInput
                value={email}
                onChange={setEmail}
                keyboardType="email-address"
                placeholder="Email"
              />
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

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPasswordScreen')}>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <View style={{marginVertical: heightPercentageToDP('4')}}>
              <PrimaryButton
                onPress={() => navigation.navigate('CompanyBottomTab')}>
                <Text style={styles.signInText}>Sign In</Text>
              </PrimaryButton>
            </View>

            {/* <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 5,
              }}>
              <View style={styles.borderStyle}></View>
              <View>
                <Text style={styles.orText}>or</Text>
              </View>
              <View style={styles.borderStyle}></View>
            </View>

            <View style={{gap: 20, marginVertical: heightPercentageToDP('4')}}>
              <TouchableOpacity
                style={[styles.socialBtn, {backgroundColor: '#000'}]}>
                <Text style={styles.googleBtnText}>Continue with Google</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.socialBtn, {backgroundColor: '#1877F2'}]}>
                <Text style={styles.googleBtnText}>Continue with Facebook</Text>
              </TouchableOpacity>
            </View> */}
          </View>

          <View style={styles.dontHaveAccountWrapper}>
            <Text style={styles.dontHaveAccount}>Don’t have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={[styles.dontHaveAccount, {color: '#E3851E'}]}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
