import {StyleSheet} from 'react-native';
import {Font_BLACK, Font_MEDIUM} from '../../../themes/typogrphy';
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
  },
  companyProfileHeading: {
    fontSize: 15,
    lineHeight: 18,
    fontFamily: Font_BLACK,
    color: '#000000',
  },
  boxWrapper: {
    backgroundColor: '#F5F5F5',
    borderRadius: 13,
    paddingHorizontal: widthPercentageToDP('4'),
    paddingVertical: heightPercentageToDP('2'),
    marginVertical: heightPercentageToDP('2'),
  },
  boxWrapperTransparent: {
    borderRadius: 13,
    paddingHorizontal: widthPercentageToDP('4'),
    paddingVertical: heightPercentageToDP('3'),
    marginVertical: heightPercentageToDP('1'),
  },
  realStateProfileHeading: {
    fontSize: 13,
    lineHeight: 15.6,
    color: '#000000',
    fontWeight: '400',
    fontFamily: Font_MEDIUM,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapContainer: {
    borderRadius: 25,
    overflow: 'hidden',
    width: 300, // Set the desired width
    height: 300, // Set the desired height
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
