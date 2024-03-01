import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  inputWrapper: {
    backgroundColor: '#EDEDED',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: heightPercentageToDP('2'),
    paddingHorizontal: widthPercentageToDP('2'),
    paddingVertical: heightPercentageToDP('2.5'),
    borderRadius: 16,
  },
});
