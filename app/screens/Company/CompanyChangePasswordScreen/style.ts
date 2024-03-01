import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {Font_BOLD} from '../../../themes/typogrphy';

export const styles = StyleSheet.create({
  input: {
    borderColor: '#E6E6E6',
    borderWidth: 1,
    paddingHorizontal: widthPercentageToDP('4'),
    paddingVertical: widthPercentageToDP('3'),
    borderRadius: 10,
    color: '#727272',
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
