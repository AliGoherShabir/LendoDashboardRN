import React, {FC, JSX} from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {Divider, Icon} from 'react-native-paper';
import {IC_ADD, IC_EYE, IC_INFO, IC_WALLET} from '../../assets';
import {widthPercentageToDP as wp} from '../../utils/responsiveScreens';
import ChartProgress from '../ChartProgress';

type GraphCardProps = PropsWithChildren<{
  title: string;
  icon: any;
}>;

const GraphCard: FC<GraphCardProps> = ({title, icon}): JSX.Element => {
  return (
    <View style={styles.container}>
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

      {/* Graph Point Details */}
      <View style={styles.graphPointDetails}>
        <Text style={styles.walletLabel}>Jun, 2023</Text>
        <View style={styles.topLabelContainer}>
          <Text style={styles.title}>220,342.76 </Text>
          <View style={styles.loansText}>
            <Text style={styles.loansTextStyle}>2 Loans</Text>
          </View>
        </View>
      </View>

      <ChartProgress />

      {/* O/S Details */}
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

      {/* Wallet Details */}
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
    </View>
  );
};

export default GraphCard;
