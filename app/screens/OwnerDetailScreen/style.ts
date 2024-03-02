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
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
  },
  orangeCircle: {
    backgroundColor: '#000',
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
    borderRadius: 25,
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
  ownDetailText: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '800',
    color: '#000',
  },
  ownDetailTextImageWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginVertical: heightPercentageToDP('1'),
  },
  separator: {
    width: widthPercentageToDP('90'),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#1B1B1B',
    marginVertical: heightPercentageToDP('2'),
  },
  rating: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 15,
    color: '#2D2D2D',
  },
  reviewDate: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 12,
    color: '#2D2D2D',
  },
  reviewSenderName: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16,
    color: '#000',
  },
  reviewContent: {
    color: '#2D2D2D',
    lineHeight: 12,
    fontSize: 10,
    fontWeight: '400',
    marginTop: heightPercentageToDP(1),
  },
});
