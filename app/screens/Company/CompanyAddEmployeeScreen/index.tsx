import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {styles} from './style';
import PrimaryInput from '../../../components/PrimaryInput';
import PrimaryButton from '../../../components/PrimaryButton';

const CompanyAddEmployeeScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [designation, setDesignation] = useState('');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: widthPercentageToDP('90'),
            alignSelf: 'center',
            paddingVertical: heightPercentageToDP('4'),
          }}>
          <View
            style={{
              marginTop: heightPercentageToDP('2'),
              marginBottom: heightPercentageToDP('4'),
            }}>
            <Text style={styles.heading}>Add Employee</Text>
          </View>

          <View>
            <View style={styles.inputWrapper}>
              <PrimaryInput
                value={name}
                onChange={setName}
                keyboardType="default"
                placeholder="Name"
              />
            </View>

            <View style={styles.inputWrapper}>
              <PrimaryInput
                value={email}
                onChange={setEmail}
                keyboardType="email-address"
                placeholder="Email"
              />
            </View>

            <View style={styles.inputWrapper}>
              <PrimaryInput
                value={designation}
                onChange={setDesignation}
                keyboardType="default"
                placeholder="Designation"
              />
            </View>

            <View style={{marginTop: heightPercentageToDP('20')}}>
              <PrimaryButton onPress={() => {}}>
                <Text style={styles.signInText}>Add</Text>
              </PrimaryButton>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CompanyAddEmployeeScreen;
