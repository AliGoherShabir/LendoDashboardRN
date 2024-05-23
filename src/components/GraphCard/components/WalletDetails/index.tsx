import React, {FC, JSX} from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-paper';
import {IC_ADD, IC_WALLET} from '../../../../assets';
import {widthPercentageToDP as wp} from '../../../../utils/responsiveScreens';

const WalletDetails: FC<PropsWithChildren> = (): JSX.Element => {
  return (
    <View style={styles.mainWalletLabelContainer}>
      <View style={styles.walletLabelContainer}>
        <View style={styles.iconContainer}>
          <Icon source={IC_WALLET} color="#2C8BFD" size={wp('5%')} />
        </View>
        <View style={styles.walletDetailsStyle}>
          <Text style={styles.walletLabel}>Wallet Balance</Text>
          <Text style={styles.title}>1,540,680.12 SAR</Text>
        </View>
      </View>
      <Icon source={IC_ADD} color="#787381" size={wp('5%')} />
    </View>
  );
};

export default WalletDetails;
