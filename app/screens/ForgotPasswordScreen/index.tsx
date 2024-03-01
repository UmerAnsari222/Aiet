import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Forgot, Logo, MessageGray} from '../../../assets/icons/icons';
import PrimaryButton from '../../components/PrimaryButton';
import PrimaryInput from '../../components/PrimaryInput';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          width: widthPercentageToDP('90%'),
          alignSelf: 'center',
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
            <Forgot />
          </View>

          <View style={styles.inputWrapper}>
            <MessageGray fill={'#9E9E9E'} />
            <PrimaryInput
              keyboardType="email-address"
              placeholder="Email"
              value={email}
              onChange={setEmail}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('VerifyScreen')}
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
              <Text style={styles.signInText}>Send</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
