import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {
  Font_BLACK,
  Font_BOLD,
  Font_LIGHT,
  Font_MEDIUM,
} from '../../../themes/typogrphy';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
    width: widthPercentageToDP('90'),
    paddingVertical: heightPercentageToDP('5'),
    alignSelf: 'center',
  },
  onboardingText: {
    color: '#000000',
    fontSize: 16,
    fontFamily: Font_MEDIUM,
    fontWeight: '600',
    lineHeight: 22.4,
    letterSpacing: 0.2,
    marginBottom: heightPercentageToDP('1'),
  },
  continueText: {
    color: '#000000',
    fontSize: 14,
    fontFamily: Font_LIGHT,
    fontWeight: '400',
    lineHeight: 16.8,
  },
  headingWrapper: {
    paddingVertical: heightPercentageToDP('2'),
  },
  inputWrapper: {
    backgroundColor: '#E7E7E7',
    borderRadius: 10,
    paddingVertical: heightPercentageToDP('0.3'),
    paddingHorizontal: heightPercentageToDP('2'),
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: heightPercentageToDP('2'),
  },
  forgotPassword: {
    fontSize: 12,
    color: '#000',
    fontFamily: Font_BLACK,
    fontWeight: '500',
    lineHeight: 16.8,
  },
  signInText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Font_BOLD,
    fontWeight: '700',
    lineHeight: 22,
  },
  borderStyle: {
    width: widthPercentageToDP('30'),
    borderColor: '#62656A',
    borderWidth: 0.5,
    borderStyle: 'dashed',
  },
  orText: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 3,
  },
  socialBtn: {
    paddingVertical: heightPercentageToDP('3'),
    borderRadius: 3,
  },
  googleBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: Font_BLACK,
  },
  dontHaveAccount: {
    color: '#000',
    fontSize: 14,
    fontFamily: Font_BLACK,
    lineHeight: 19,
  },
  dontHaveAccountWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
});
