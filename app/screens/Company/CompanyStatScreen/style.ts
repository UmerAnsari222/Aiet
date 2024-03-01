import {StyleSheet} from 'react-native';
import {Font_MEDIUM} from '../../../themes/typogrphy';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  heading: {
    fontFamily: Font_MEDIUM,
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    lineHeight: 22.4,
  },
  box: {
    backgroundColor: '#E3851E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: widthPercentageToDP('4'),
    height: heightPercentageToDP('13'),
    borderRadius: 20,
  },
  circle: {
    backgroundColor: '#FFFFFF',
    height: widthPercentageToDP('12'),
    width: widthPercentageToDP('12'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  circleText: {
    color: '#000000',
    fontSize: 21,
    fontWeight: '700',
    fontFamily: Font_MEDIUM,
  },
  text: {
    fontSize: 20,
    lineHeight: 36,
    color: '#FFFFFF',
    fontFamily: Font_MEDIUM,
    fontWeight: '600',
  },
});
