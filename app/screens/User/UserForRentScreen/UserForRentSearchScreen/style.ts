import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Font_BLACK} from '../../../../themes/typogrphy';

export const styles = StyleSheet.create({
  inputWrapper: {
    backgroundColor: '#EDEDED',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: heightPercentageToDP('2'),
    paddingHorizontal: widthPercentageToDP('2'),
    paddingVertical: heightPercentageToDP('0.3'),
    borderRadius: 16,
    width: widthPercentageToDP('80'),
  },
  recentSearchText: {
    fontSize: 15,
    fontWeight: '500',
    fontFamily: Font_BLACK,
    color: '#000000',
    lineHeight: 32,
  },
  flexItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  propertySearchWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 2,
    marginBottom: 50,
    marginTop: 10,
  },
});
