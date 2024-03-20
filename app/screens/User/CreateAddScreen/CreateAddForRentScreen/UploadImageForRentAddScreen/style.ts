import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Font_BOLD, Font_REGULAR} from '../../../../../themes/typogrphy';

export const styles = StyleSheet.create({
  uploadImageMinimText10: {
    color: '#555555',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 34,
    fontFamily: Font_REGULAR,
  },
  uploadImageMinimText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#676666',
    fontFamily: Font_REGULAR,
    flex: 1,
    lineHeight: 16,
    marginTop: 2,
  },
  uploadImageText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000D9',
    fontFamily: Font_REGULAR,
    flex: 1,
    lineHeight: 24,
  },
  uploadImageWapper: {
    backgroundColor: '#F5F5F5',
    height: 160,
    borderRadius: 15,
    borderColor: '#C0C0C0',
    borderWidth: 1.2,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: heightPercentageToDP('3'),
    paddingVertical: heightPercentageToDP('2'),
  },
  uploadButton: {
    backgroundColor: '#D07D36',
    paddingHorizontal: widthPercentageToDP('4'),
    paddingVertical: heightPercentageToDP('1'),
    borderRadius: 5,
  },
  addImageStyle: {
    width: 76,
    height: 76,
    borderRadius: 9,
    objectFit: 'cover',
  },
  addImageWrapper: {
    marginTop: heightPercentageToDP('2'),
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    columnGap: 6,
    rowGap: 10,
  },
  addImageButton: {
    width: 76,
    height: 76,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1.2,
    borderStyle: 'dashed',
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
