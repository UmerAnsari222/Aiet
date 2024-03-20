import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Font_BOLD, Font_REGULAR} from '../../../../../themes/typogrphy';

export const styles = StyleSheet.create({
  signInText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Font_BOLD,
    fontWeight: '700',
    lineHeight: 22,
  },
  inputWrapper: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingVertical: heightPercentageToDP('0.3'),
    paddingHorizontal: heightPercentageToDP('2'),
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: heightPercentageToDP('1.2'),
    marginVertical: heightPercentageToDP('1.2'),
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: Font_REGULAR,
    lineHeight: 18,
    color: '#000',
    marginBottom: 1,
    paddingHorizontal: 4,
  },
  filtersButton: {
    height: heightPercentageToDP('7'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    paddingHorizontal: widthPercentageToDP('5'),
  },
});
