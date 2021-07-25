import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import styles from './styles';

const List = ({menu, item, handleButton}) => {
  return (
    <TouchableOpacity onPress={handleButton} style={{flexDirection: 'row'}}>
      {menu && <View style={styles.ball} />}
      <Text style={{color: 'white', marginLeft: 10}}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default List;
