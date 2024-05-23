import React, {FC, JSX} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import FeaturesList from '../../components/FeatureList';
import {IC_INFO, IC_NOTIFICATION} from '../../assets';
import {Card, Avatar, IconButton, Badge} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../utils/responsiveScreens';
import GraphCard from '../../components/GraphCard';
import {ScrollView, View} from 'react-native';

const HomeScreen: FC<any> = (): JSX.Element => {
  return (
    <SafeAreaView edges={['right', 'top', 'left']} style={styles.mainContainer}>
      <ScrollView>
        <Card.Title
          title="Welcome back!"
          titleStyle={styles.titleText}
          subtitleStyle={styles.subtitleText}
          style={styles.headerContainerStyle}
          subtitle="Mary Doe"
          left={props => (
            <View>
              <Avatar.Icon {...props} icon={IC_INFO} />
              <Badge
                size={wp('3%')}
                style={{
                  backgroundColor: '#38D36C',
                  borderWidth: 2,
                  borderColor: 'white',
                  position: 'absolute',
                  bottom: 0, //wp('4%'),
                  right: 0, //wp('4%'),
                }}
              />
            </View>
          )}
          right={props => (
            <View>
              <IconButton
                {...props}
                icon={IC_NOTIFICATION}
                iconColor="#ffffff"
                onPress={() => {}}
              />
              <Badge
                size={wp('2%')}
                style={{
                  backgroundColor: '#F56565',
                  position: 'absolute',
                  top: wp('4%'),
                  right: wp('4%'),
                }}
              />
            </View>
          )}
        />

        <GraphCard />

        <FeaturesList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
