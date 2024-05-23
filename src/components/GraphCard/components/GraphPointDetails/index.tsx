import React, {FC, JSX} from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const GraphPointDetails: FC<PropsWithChildren> = (): JSX.Element => {
  return (
    <View style={styles.graphPointDetails}>
      <Text style={styles.walletLabel}>Jun, 2023</Text>
      <View style={styles.topLabelContainer}>
        <Text style={styles.title}>220,342.76 </Text>
        <View style={styles.loansText}>
          <Text style={styles.loansTextStyle}>2 Loans</Text>
        </View>
      </View>
    </View>
  );
};

export default GraphPointDetails;
