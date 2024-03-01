import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Font_BOLD, Font_REGULAR} from '../../themes/typogrphy';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP('90%'),
    alignSelf: 'center',
  },
  logoImage: {
    alignItems: 'center',
  },
  heading: {
    color: '#000',
    fontSize: 24,
    fontFamily: Font_REGULAR,
    fontWeight: '700',
    lineHeight: 28,
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
  paragraph: {
    color: '#808080',
    marginTop: 5,
    fontSize: 13,
    fontWeight: '400',
    fontFamily: Font_REGULAR,
    lineHeight: 15.6,
  },

  label: {
    color: '#000',
    fontSize: 12,
    fontFamily: Font_REGULAR,
    fontWeight: '500',
  },

  fieldsWrapper: {
    marginTop: 5,
  },
  fieldWrapper: {
    marginVertical: widthPercentageToDP('4%'),
  },

  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: widthPercentageToDP('5%'),
  },
  signInText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Font_BOLD,
    fontWeight: '700',
    lineHeight: 22,
  },
});
