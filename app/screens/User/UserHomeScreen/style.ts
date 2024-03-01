import {StyleSheet} from 'react-native';
import {Font_BOLD, Font_REGULAR, Font_THIN} from '../../../themes/typogrphy';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  greeting: {
    color: '#000',
    fontSize: 20,
    lineHeight: 26,
    fontFamily: Font_THIN,
    fontWeight: '800',
  },
  circleBg: {
    backgroundColor: '#FFF3F3',
    height: 36,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  benefitsText: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: Font_REGULAR,
    color: '#000000',
    lineHeight: 22,
  },
  seeAll: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: Font_REGULAR,
    color: '#000000',
    lineHeight: 22,
  },
  boxWrapper: {
    backgroundColor: '#F5F5F5',
    borderRadius: 13,
    paddingHorizontal: widthPercentageToDP('4'),
    paddingVertical: heightPercentageToDP('3'),
    marginVertical: heightPercentageToDP('2'),
  },
  priceText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000000',
    fontFamily: Font_BOLD,
    marginTop: heightPercentageToDP('1'),
  },
  priceDiscount: {
    fontSize: 8,
    fontWeight: '700',
    color: '#000000',
    fontFamily: Font_BOLD,
    marginTop: heightPercentageToDP('1'),
    textDecorationLine: 'line-through',
  },
  placeText: {
    fontSize: 7.82,
    fontWeight: '500',
    color: '#000000',
    fontFamily: Font_BOLD,
    marginTop: heightPercentageToDP('1'),
  },
  companyNameText: {
    fontSize: 8,
    fontWeight: '700',
    color: '#000000',
    fontFamily: Font_THIN,
    marginTop: heightPercentageToDP('1'),
  },
  poweredBy: {
    fontSize: 8,
    fontWeight: '500',
    color: '#000000',
    fontFamily: Font_THIN,
    marginTop: heightPercentageToDP('1'),
  },
});
