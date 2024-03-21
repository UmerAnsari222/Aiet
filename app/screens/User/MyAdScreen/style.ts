import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Font_REGULAR} from '../../../themes/typogrphy';

export const styles = StyleSheet.create({
  inputWrapper: {
    backgroundColor: '#EDEDED',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: heightPercentageToDP('2'),
    paddingHorizontal: widthPercentageToDP('2'),
    paddingVertical: heightPercentageToDP('2.5'),
    borderRadius: 13,
    gap: 10,
  },
  activeButton: {
    backgroundColor: '#E3851E',
    //   paddingHorizontal: widthPercentageToDP('4'),
    width: 143,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  notActiveButton: {
    backgroundColor: '#EDEDED',
    //   paddingHorizontal: widthPercentageToDP('4'),
    width: 143,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  activeButtonText: {
    fontSize: 16,
    lineHeight: 28,
    fontWeight: '600',
    fontFamily: Font_REGULAR,
    color: '#FFF',
  },
  notActiveButtonText: {
    fontSize: 16,
    lineHeight: 28,
    fontWeight: '600',
    fontFamily: Font_REGULAR,
    color: '#000',
  },
});
