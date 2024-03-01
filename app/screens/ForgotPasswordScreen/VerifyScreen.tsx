import {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {styles} from './style';
import {Confirm, Confirmed, MessageGray} from '../../../assets/icons/icons';
import PrimaryInput from '../../components/PrimaryInput';
import LinearGradient from 'react-native-linear-gradient';
import OtpInput from '../../components/OtpInput';
import {useNavigation} from '@react-navigation/native';

export default function VerifyScreen() {
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');

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
            <Text style={styles.heading}>OTP Verification</Text>
            <Text style={styles.paragraph}>
              Enter otp sent to your email for the verification process.
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: heightPercentageToDP('4'),
            }}>
            <Confirmed />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 4,
              justifyContent: 'space-between',
            }}>
            <OtpInput value={otp1} onChange={setOtp1} />
            <OtpInput value={otp2} onChange={setOtp2} />
            <OtpInput value={otp3} onChange={setOtp3} />
            <OtpInput value={otp4} onChange={setOtp4} />
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
              <Text style={styles.signInText}>Verify</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
