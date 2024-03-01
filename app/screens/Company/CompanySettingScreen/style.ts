import {StyleSheet} from 'react-native';
import {
  Font_BOLD,
  Font_MEDIUM,
  Font_REGULAR,
  Font_THIN,
} from '../../../themes/typogrphy';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  heading: {
    fontFamily: Font_MEDIUM,
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    lineHeight: 22.4,
  },
  inputWrapper: {
    backgroundColor: '#E7E7E7',
    borderRadius: 10,
    paddingVertical: heightPercentageToDP('0.3'),
    paddingHorizontal: heightPercentageToDP('2'),
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: heightPercentageToDP('2'),
  },
  signInText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Font_BOLD,
    fontWeight: '700',
    lineHeight: 22,
  },
  notificationsText: {
    fontSize: 15,
    lineHeight: 18,
    color: '#000000',
    fontFamily: Font_MEDIUM,
    fontWeight: '600',
  },
  pushNotificationsText: {
    fontSize: 14,
    lineHeight: 16,
    color: '#000000',
    fontFamily: Font_MEDIUM,
    fontWeight: '400',
  },
  listButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: widthPercentageToDP('2%'),
  },
  flexInline: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  listHeading: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19.2,
    fontFamily: Font_THIN,
    color: '#000000',
  },
});
