import React, {FC, JSX} from 'react';
import type {PropsWithChildren} from 'react';
import {View, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {widthPercentageToDP as wp} from '../../utils/responsiveScreens';
import styles from './styles';

type ItemProps = PropsWithChildren<{
  someData?: string;
}>;

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [50, 20, 2, 86, 71, 100],
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      strokeWidth: 2,
    },
  ],
};

const chartConfig = {
  propsForVerticalLabels: {
    fontSize: wp('3.3%'),
    fontWeight: '400',
  },
  backgroundColor: '#ffffff',
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  fillShadowGradientFrom: '#2C8BFD',
  fillShadowGradientTo: '#ffffff',
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `#787381`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#2C8BFD',
  },
};

const ChartProgress: FC<ItemProps> = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={wp('86%')}
        onDataPointClick={data => console.log('data ===> ', data)}
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        withHorizontalLabels={false}
        yAxisInterval={1}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />
    </View>
  );
};

export default ChartProgress;
