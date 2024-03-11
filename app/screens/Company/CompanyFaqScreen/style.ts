import {Platform, StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    marginBottom: 10,
    borderRadius: 18,
    paddingVertical: 20,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: '#F4EFEFF0',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 1,
        shadowRadius: 10.699999809265137,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  header: {
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    lineHeight: 19,
  },
  content: {
    padding: 5,
    backgroundColor: '#fff',
    fontSize: 12,
    lineHeight: 16.8,
    color: '#000',
  },
});
