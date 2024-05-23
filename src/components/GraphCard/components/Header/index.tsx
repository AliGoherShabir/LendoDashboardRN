import React, {FC, JSX} from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-paper';
import {IC_ADD, IC_EYE, IC_INFO} from '../../../../assets';
import {widthPercentageToDP as wp} from '../../../../utils/responsiveScreens';
import styles from './styles';

const Header: FC<PropsWithChildren> = (): JSX.Element => {
  return (
    <View style={styles.largeTextContainer}>
      <View>
        <View style={styles.topLabelContainer}>
          <Text style={styles.label}>Portfolio Value</Text>
          <Icon source={IC_INFO} color="#787381" size={wp('4%')} />
        </View>
        <View style={styles.topLabelContainer}>
          <Text style={styles.titleLarge}>1,100,000.</Text>
          <Text style={styles.titleMedium}>00 SAR</Text>
          <Icon source={IC_EYE} color="#787381" size={wp('7%')} />
        </View>
      </View>
      <Icon source={IC_ADD} color="#787381" size={wp('5%')} />
    </View>
  );
};

export default Header;
