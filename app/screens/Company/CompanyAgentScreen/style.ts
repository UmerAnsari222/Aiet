import {StyleSheet} from 'react-native';
import {Font_BOLD, Font_REGULAR} from '../../../themes/typogrphy';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  nameText: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '600',
    lineHeight: 24,
    fontFamily: Font_BOLD,
    marginBottom: heightPercentageToDP('1'),
  },
  phoneText: {
    fontSize: 15,
    color: '#000000',
    fontWeight: '400',
    lineHeight: 18,
    fontFamily: Font_BOLD,
    marginBottom: heightPercentageToDP('1'),
  },
  boxWrapper: {
    backgroundColor: '#F6F6F6',
    borderRadius: 13,
    paddingHorizontal: widthPercentageToDP('4'),
    paddingVertical: heightPercentageToDP('3'),
    marginVertical: heightPercentageToDP('2'),
    marginRight: 10,
  },
  reviewsName: {
    fontSize: 11.83,
    color: '#000000',
    lineHeight: 14,
    fontWeight: '700',
  },
  reviewContent: {
    color: '#000000',
    fontSize: 9,
    lineHeight: 19,
    fontFamily: Font_REGULAR,
  },
  reviewTime: {
    fontSize: 7,
    lineHeight: 16.76,
    fontWeight: '400',
    color: '#A1A5C1',
  },
  howWeHelp: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 18.94,
    color: '#5A5A5A',
  },
  propertyText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19.2,
    color: '#000000',
  },
  propertyCardTypeText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19.2,
    color: '#000000',
    marginBottom: widthPercentageToDP('3'),
  },
  starLabel: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: widthPercentageToDP('3'),
    paddingVertical: widthPercentageToDP('2'),
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    top: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});
