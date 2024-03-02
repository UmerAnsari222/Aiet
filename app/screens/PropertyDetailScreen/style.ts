import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  whiteCircle: {
    backgroundColor: '#fff',
    height: 28,
    width: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  apartmentText: {
    color: '#E3851E',
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 11,
    textAlign: 'center',
  },
  apartmentTextBlack: {
    color: '#000',
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 11,
    textAlign: 'center',
  },
  orangeCircle: {
    backgroundColor: '#FBECDB',
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  feactherTextBlack: {
    color: '#000',
    fontSize: 9,
    fontWeight: '700',
    lineHeight: 11,
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
