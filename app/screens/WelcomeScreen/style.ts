import {StyleSheet} from 'react-native';
import {Font_BLACK, Font_REGULAR} from '../../themes/typogrphy';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  heading: {
    lineHeight: 30,
    fontFamily: Font_BLACK,
    color: '#3D1F01',
    fontSize: 32,
    fontWeight: '700',
    marginVertical: hp('15'),
  },
  bottomSheetHeading: {
    color: '#000000',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 24.83,
    fontWeight: '600',
    marginBottom: hp('3'),
  },
  bottomSheetWrapper: {
    paddingVertical: hp('4'),
  },
  profileButtons: {
    backgroundColor: '#7C4002',
    height: hp('20'),
    width: wp('40'),
    borderRadius: 15,
  },
  profileButtonsText: {
    fontSize: 16,
    fontFamily: Font_REGULAR,
    fontWeight: '500',
    color: '#fff',
    lineHeight: 25,
  },
  profileButtonsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: wp('4'),
  },
  buttonView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 3,
  },
});
