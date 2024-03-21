import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Font_SEMIBOLD} from '../../../themes/typogrphy';

export const styles = StyleSheet.create({
  buttonsText: {
    fontSize: 24,
    color: '#E3851E',
    fontFamily: Font_SEMIBOLD,
    fontWeight: '600',
    lineHeight: 28,
    textAlign: 'center',
  },
  buttons: {
    backgroundColor: '#FFF8EF',
    borderRadius: 15,
    // paddingHorizontal: widthPercentageToDP('2'),
    // paddingVertical: heightPercentageToDP('2.5'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
});
