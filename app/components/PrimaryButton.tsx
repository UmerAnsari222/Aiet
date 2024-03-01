import {View, Text, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {heightPercentageToDP} from 'react-native-responsive-screen';

type PrimaryButtonProps = {
  onPress: () => void;
  children: ReactNode;
};

export default function PrimaryButton({onPress, children}: PrimaryButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={{borderRadius: 15}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0, 0.4966, 0.9996]}
        colors={['#7C4002', '#000000', '#7C4002']}
        style={{
          flex: 1,
          paddingVertical: heightPercentageToDP('2.5'),
          borderRadius: 15,
        }}>
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
}
