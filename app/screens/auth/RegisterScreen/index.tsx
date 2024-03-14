import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {styles} from './style';
import {
  Hide,
  Lock,
  MessageGray,
  Profile,
  SmLogo,
} from '../../../../assets/icons/icons';
import PrimaryInput from '../../../components/PrimaryInput';
import PasswordInput from '../../../components/PasswordInput';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PrimaryButton from '../../../components/PrimaryButton';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSecure, setIsSecure] = useState(true);
  const [isConfirmSecure, setIsConfirmSecure] = useState(true);

  const navigation = useNavigation();
  const route = useRoute();
  const {type} = route?.params;

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
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <ScrollView
        automaticallyAdjustKeyboardInsets={true}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={{flex: 1}}>
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
              <Profile fill={'#9E9E9E'} />
              <PrimaryInput
                value={name}
                onChange={setName}
                keyboardType="default"
                placeholder="Name"
              />
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

            <View style={{marginVertical: heightPercentageToDP('3')}}>
              <PrimaryButton onPress={() => {}}>
                <Text style={styles.signInText}>Sign Up</Text>
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
            <Text style={styles.dontHaveAccount}>Already have an Account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen', {type: type})}>
              <Text style={[styles.dontHaveAccount, {color: '#E3851E'}]}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;
