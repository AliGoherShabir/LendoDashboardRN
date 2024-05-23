import React, {FC, JSX} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import FeaturesList from '../../components/FeatureList';
import { IC_INFO, IC_NOTIFICATION } from '../../assets';
import { Card, Avatar, IconButton } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../utils/responsiveScreens';
import GraphCard from '../../components/GraphCard';

const HomeScreen: FC<any> = (): JSX.Element => {
  return (
    <SafeAreaView edges={['right', 'top', 'left']} style={styles.mainContainer}>
      <Card.Title
        title="Welcome back!"
        titleStyle={styles.titleText}
        subtitleStyle={styles.subtitleText}
        style={styles.headerContainerStyle}
        subtitle="Mary Doe"
        left={(props) => <Avatar.Icon {...props} icon={IC_INFO} />}
        right={(props) => <IconButton {...props} icon={IC_NOTIFICATION} iconColor='#ffffff' onPress={() => {}} />}
      />

      <GraphCard title='Some Title' icon={IC_INFO} />

      <FeaturesList />
    </SafeAreaView>
  );
};

export default HomeScreen;
