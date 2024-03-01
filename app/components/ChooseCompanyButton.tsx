import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC, ReactNode} from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';

interface ChooseCompanyButtonProps {
  children: ReactNode;
  onPress: () => void;
}

const ChooseCompanyButton: FC<ChooseCompanyButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderColor: '#48270B',
        borderWidth: 1,
        borderRadius: 15,
        height: heightPercentageToDP('13'),
        backgroundColor: '#FFF8EF',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {children}
    </TouchableOpacity>
  );
};

export default ChooseCompanyButton;
