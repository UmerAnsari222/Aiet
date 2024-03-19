import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Font_BOLD, Font_REGULAR} from '../../themes/typogrphy';

export const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: hp('4'),
  },
  buttonWrapper: {
    paddingHorizontal: wp('10'),
    gap: wp('12'),
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: hp('14'),
  },
  buttonText: {
    color: '#FFF',
    fontFamily: Font_BOLD,
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 28,
  },
});
