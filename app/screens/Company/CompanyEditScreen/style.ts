import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {Font_BOLD, Font_REGULAR} from '../../../themes/typogrphy';

export const styles = StyleSheet.create({
  input: {
    borderColor: '#E6E6E6',
    borderWidth: 1,
    paddingHorizontal: widthPercentageToDP('2'),
    paddingVertical: widthPercentageToDP('1'),
    borderRadius: 10,
    color: '#727272',
    flexDirection: 'row',
    alignItems: 'center',
  },
  signInText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Font_BOLD,
    fontWeight: '700',
    lineHeight: 22,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: Font_REGULAR,
    lineHeight: 18,
    color: '#000',
    marginBottom: 8,
    paddingHorizontal: 4,
  },
});
