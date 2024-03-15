import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  wrapper: {
    borderColor: '#8A8A8A',
    borderWidth: 1,
    borderRadius: 12,
    height: heightPercentageToDP('8.7'),
    //   height: 63,
    paddingHorizontal: widthPercentageToDP('5'),
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginTop: heightPercentageToDP('3'),
    backgroundColor: '#EEEEEE',
  },
});
