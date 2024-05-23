import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { mocData } from '../../store/utils';
import Feature from '../Feature';
import styles from './styles';

const FeaturesList = () => {
  return (
    <View>
      <Text style={styles.header}>Explore Lendo Features!</Text>
      <FlatList
        data={mocData.features}
        renderItem={({ item }) => <Feature title={item.title} icon={item.icon} />}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        scrollEnabled
        nestedScrollEnabled
      />
    </View>
  );
};

export default FeaturesList;
