import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {mocData} from '../../utils/utils';
import Feature from '../Feature';
import styles from './styles';

const FeaturesList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore Lendo Features!</Text>
      <FlatList
        data={mocData.features}
        renderItem={({item}) => <Feature title={item.title} icon={item.icon} />}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        scrollEnabled
        nestedScrollEnabled
      />
    </View>
  );
};

export default FeaturesList;
