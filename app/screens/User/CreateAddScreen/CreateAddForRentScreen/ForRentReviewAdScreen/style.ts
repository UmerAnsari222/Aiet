import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Font_BOLD} from '../../../../../themes/typogrphy';

export const styles = StyleSheet.create({
  signInText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Font_BOLD,
    fontWeight: '700',
    lineHeight: 22,
  },

  apartmentText: {
    color: '#E3851E',
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 11,
    textAlign: 'center',
  },
  apartmentTextBlack: {
    color: '#000',
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 11,
    textAlign: 'center',
  },

  feactherTextBlack: {
    color: '#000',
    fontSize: 9,
    fontWeight: '700',
    lineHeight: 11,
  },
  boxWrapper: {
    backgroundColor: '#F5F5F5',
    borderRadius: 13,
    paddingHorizontal: widthPercentageToDP('4'),
    paddingVertical: heightPercentageToDP('2'),
    marginVertical: heightPercentageToDP('2'),
  },
  boxWrapperTransparent: {
    borderRadius: 13,
    paddingHorizontal: widthPercentageToDP('4'),
    paddingVertical: heightPercentageToDP('3'),
    marginVertical: heightPercentageToDP('1'),
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
