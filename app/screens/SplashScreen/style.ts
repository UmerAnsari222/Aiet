import {StyleSheet} from 'react-native';
import {Font_MEDIUM} from '../../themes/typogrphy';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#101010',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: '#DF8815',
    fontFamily: Font_MEDIUM,
    fontSize: 24,
    lineHeight: 30,
    textTransform: 'uppercase',
    letterSpacing: 4,
  },
});
