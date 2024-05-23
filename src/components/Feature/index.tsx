import React, {FC, JSX} from 'react';
import type {PropsWithChildren} from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

type FeatureProps = PropsWithChildren<{
  title: string,
  icon: any,
}>;

const Feature: FC<FeatureProps> = ({ title, icon }): JSX.Element => {
  return (
    <View style={styles.featureContainer}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Feature;
