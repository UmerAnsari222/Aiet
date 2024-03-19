import {
  View,
  Text,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import React, {FC, ReactNode} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

type PerposeCardProps = {
  name: string;
  Img: any;
  Bg: string;
  textColor: string;
  children: ReactNode;
  onPress: () => void;
};

const PerposeCard: FC<PerposeCardProps> = ({
  Img,
  name,
  Bg,
  textColor,
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: Bg,
        height: heightPercentageToDP('11.7'),
        // height: 84,
        width: widthPercentageToDP('27'),
        // width: 97,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* <Image source={Img} /> */}
      <Img />
      {children}
    </TouchableOpacity>
  );
};

export default PerposeCard;
