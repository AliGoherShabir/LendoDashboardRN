import React, {FC, JSX} from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

const DummyScreen: FC<any> = (): JSX.Element => {
  return (
    <SafeAreaView edges={['right', 'top', 'left']}>
      <Text style={styles.titleText}>Under Development!</Text>
    </SafeAreaView>
  );
};

export default DummyScreen;
