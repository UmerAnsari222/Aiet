import {Platform, StyleSheet} from 'react-native';
import {Font_BLACK, Font_REGULAR} from '../../themes/typogrphy';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
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
  sheet: {
    borderRadius: 22,
    // borderColor: '#130F26',
    // borderWidth: 0.3,
    // width: widthPercentageToDP('50'),
    width: 335,
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: '#2222224A',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 1,
        shadowRadius: 10.699999809265137,
      },
      android: {
        elevation: 4.8,
        shadowColor: '#2222224A',
      },
    }),
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
    // height: hp('20'),
    // width: wp('40'),
    width: 100,
    height: 100,
    borderRadius: 15,
    ...Platform.select({
      ios: {
        shadowColor: '#222222',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 4.8,
      },
      android: {
        elevation: 4.8,
      },
    }),
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
    justifyContent: 'space-between',
    // gap: wp('4'),
    paddingHorizontal: widthPercentageToDP('10'),
  },
  buttonView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 3,
  },
});
