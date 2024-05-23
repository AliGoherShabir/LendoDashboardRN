import React, {FC, JSX} from 'react';
import type {PropsWithChildren} from 'react';
import {View} from 'react-native';
import styles from './styles';
import ChartProgress from '../ChartProgress';
import Header from './components/Header';
import GraphPointDetails from './components/GraphPointDetails';
import OSDetails from './components/OSDetails';
import WalletDetails from './components/WalletDetails';

const GraphCard: FC<PropsWithChildren> = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />

      <GraphPointDetails />

      <ChartProgress />

      <OSDetails />

      <WalletDetails />
    </View>
  );
};

export default GraphCard;
