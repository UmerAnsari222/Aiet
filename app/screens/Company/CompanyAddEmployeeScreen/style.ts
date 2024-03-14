import {StyleSheet} from 'react-native';
import {Font_BOLD, Font_MEDIUM} from '../../../themes/typogrphy';
import {heightPercentageToDP} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  heading: {
    fontFamily: Font_MEDIUM,
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    lineHeight: 22.4,
  },
  inputWrapper: {
    backgroundColor: '#E7E7E7',
    borderRadius: 10,
    paddingVertical: heightPercentageToDP('0.3'),
    paddingHorizontal: heightPercentageToDP('2'),
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: heightPercentageToDP('1.2'),
  },
  signInText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Font_BOLD,
    fontWeight: '700',
    lineHeight: 22,
  },
});
