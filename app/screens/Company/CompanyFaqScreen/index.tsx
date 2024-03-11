import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {LeftArrow, Up} from '../../../../assets/icons/icons';
import {Font_REGULAR} from '../../../themes/typogrphy';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Accordion = ({title, content}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={toggleAccordion}>
        <Text style={styles.headerText}>{title}</Text>
        <Up />
      </TouchableOpacity>
      {expanded && (
        <View style={styles.content}>
          <Text style={styles.content}>{content}</Text>
        </View>
      )}
    </View>
  );
};

const CompanyFaqScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            width: widthPercentageToDP('90'),
            alignSelf: 'center',
            paddingVertical: heightPercentageToDP('4'),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <LeftArrow />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                color: '#000000D9',
                fontFamily: Font_REGULAR,
              }}>
              FAQs
            </Text>
          </View>
          <View style={{marginTop: heightPercentageToDP('8')}}>
            <Accordion
              title="Lorem ipsum dolor sit amet"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Accordion
              title="Lorem ipsum dolor sit amet"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Accordion
              title="Lorem ipsum dolor sit amet"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CompanyFaqScreen;
