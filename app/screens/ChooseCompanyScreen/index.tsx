import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import React from 'react';
import {BrownLogo, MessageGray, SmLogo} from '../../../assets/icons/icons';
import {styles} from './style';
import ChooseCompanyButton from '../../components/ChooseCompanyButton';
import {useNavigation} from '@react-navigation/native';

const ChooseCompanyScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{paddingVertical: 20}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={SmLogo} />
        </View>

        <View style={styles.buttonWrapper}>
          <ChooseCompanyButton onPress={() => {}}>
            <Text style={styles.buttonText}>Appraiser</Text>
          </ChooseCompanyButton>
          <ChooseCompanyButton
            onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.buttonText}>Real Estate Broker</Text>
          </ChooseCompanyButton>
          <ChooseCompanyButton onPress={() => {}}>
            <Text style={styles.buttonText}>Hardware Store</Text>
          </ChooseCompanyButton>
          <ChooseCompanyButton onPress={() => {}}>
            <Text style={styles.buttonText}>Tender</Text>
          </ChooseCompanyButton>
          <ChooseCompanyButton onPress={() => {}}>
            <Text style={styles.buttonText}>Lawyer</Text>
          </ChooseCompanyButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChooseCompanyScreen;
