import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Font_REGULAR} from '../../themes/typogrphy';

export const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: hp('4'),
  },
  buttonWrapper: {
    paddingHorizontal: wp('10'),
    gap: wp('5'),
  },
  buttonText: {
    color: '#E3851E',
    fontFamily: Font_REGULAR,
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 28,
  },
});
