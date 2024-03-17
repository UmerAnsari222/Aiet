import {View, Text, TouchableOpacity, Platform} from 'react-native';
import React, {FC, ReactNode} from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

interface ChooseCompanyButtonProps {
  children: ReactNode;
  onPress: () => void;
}

const ChooseCompanyButton: FC<ChooseCompanyButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      locations={[0, 0.4966, 0.9996]}
      colors={['#7C4002', '#000000', '#7C4002']}
      style={{
        flex: 1,
        // paddingVertical: heightPercentageToDP('2.5'),
        borderRadius: 15,
        height: 62,
        width: 253,
        ...Platform.select({
          ios: {
            shadowColor: '#3B1E00',
            shadowOffset: {width: 1, height: 1},
            shadowOpacity: 0.55,
            shadowRadius: 13 / 2, // Dividing by 2 to match the CSS value
          },
          android: {
            elevation: 13,
          },
        }),
        // height: heightPercentageToDP('9'),

        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          // height: heightPercentageToDP('13'),
          // height: 62,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {children}
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default ChooseCompanyButton;
