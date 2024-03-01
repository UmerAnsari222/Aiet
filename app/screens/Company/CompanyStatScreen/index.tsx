import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {styles} from './style';
import {Font_MEDIUM} from '../../../themes/typogrphy';

const CompanyStatScreen = () => {
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
            <Text style={styles.heading}>Stats</Text>
          </View>

          <View style={{gap: 20}}>
            <View style={styles.box}>
              <View>
                <Text style={styles.text}>No. of clicks</Text>
              </View>
              <View style={styles.circle}>
                <Text style={styles.circleText}>15</Text>
              </View>
            </View>

            <View style={styles.box}>
              <View>
                <Text style={styles.text}>No. of visits</Text>
              </View>
              <View style={styles.circle}>
                <Text style={styles.circleText}>20</Text>
              </View>
            </View>

            <View style={styles.box}>
              <View>
                <Text style={styles.text}>
                  No. of individuals {'\n'} added to favorites
                </Text>
              </View>
              <View style={styles.circle}>
                <Text style={styles.circleText}>20</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CompanyStatScreen;
