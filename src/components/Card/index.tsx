import React, {FC, JSX} from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text, Image, Button} from 'react-native';
import styles from './styles';

type ItemProps = PropsWithChildren<{
  data?: string;
}>;

const Card: FC<ItemProps> = ({data}): JSX.Element => {
  return (
    <View style={styles.shadowStyle}>
        <Text>Card Hello!</Text>
    </View>
  );
};

export default Card;
