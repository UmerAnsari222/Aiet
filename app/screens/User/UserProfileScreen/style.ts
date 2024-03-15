import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Font_BOLD, Font_REGULAR, Font_THIN} from '../../../themes/typogrphy';

export const styles = StyleSheet.create({
  boxWrapper: {
    backgroundColor: '#F5F5F5',
    borderRadius: 13,
    paddingHorizontal: widthPercentageToDP('4'),
    paddingVertical: heightPercentageToDP('2'),
    marginVertical: heightPercentageToDP('2'),
  },
  smBoxWrapper: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: widthPercentageToDP('4'),
    paddingVertical: heightPercentageToDP('2'),
    marginVertical: heightPercentageToDP('2.5'),
    width: widthPercentageToDP('30'),
    // width: 108,
    alignItems: 'center',
    gap: 4,
  },
  profileText: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28,
    fontFamily: Font_BOLD,
    color: '#000000',
  },
  profileCreatedText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16,
    fontFamily: Font_REGULAR,
    color: '#000000',
  },
  profileUserName: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
    fontFamily: Font_REGULAR,
  },
  profileUserAge: {
    color: '#3F3F3F',
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 15,
    fontFamily: Font_THIN,
  },
  profileUserDob: {
    color: '#3F3F3F',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 18,
    fontFamily: Font_THIN,
    marginTop: heightPercentageToDP('1'),
  },
  settingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: widthPercentageToDP('60'),
    justifyContent: 'space-between',
  },
});
