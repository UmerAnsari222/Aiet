import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Font_BOLD} from '../../../../themes/typogrphy';

export const styles = StyleSheet.create({
  wrapper: {
    borderColor: '#8A8A8A',
    borderWidth: 1,
    borderRadius: 12,
    height: heightPercentageToDP('8'),
    paddingHorizontal: widthPercentageToDP('5'),
    gap: 10,
    marginTop: heightPercentageToDP('3'),
    backgroundColor: '#EEEEEE',
    color: '#B9B9B9',
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
