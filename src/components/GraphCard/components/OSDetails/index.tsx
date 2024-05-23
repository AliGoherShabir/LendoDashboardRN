import React, {FC, JSX} from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const OSDetails: FC<PropsWithChildren> = (): JSX.Element => {
  return (
    <View style={styles.generalLabelContainer}>
      <View style={styles.generalDetailsStyle}>
        <Text style={styles.walletLabel}>O/S Loans</Text>
        <Text style={styles.title}>60 Loans</Text>
      </View>
      <View style={styles.generalDetailsStyle}>
        <Text style={styles.walletLabel}>O/S Principle</Text>
        <Text style={styles.title}>1,000,000 SAR</Text>
      </View>
      <View style={styles.generalDetailsStyle}>
        <Text style={styles.walletLabel}>Exp. Profit</Text>
        <Text style={styles.title}>100,000 SAR</Text>
      </View>
    </View>
  );
};

export default OSDetails;
