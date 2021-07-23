import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const List = ({menu, item, handleButton}) => {
  return (
    <TouchableOpacity onPress={handleButton} style={{flexDirection: 'row'}}>
      {menu && <View style={styles.ball} />}
      <Text style={{color: 'white', marginLeft: 10}}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  ball: {
    width: 10,
    height: 10,
    backgroundColor: '#f0b321',
    borderRadius: 100,
    alignSelf: 'center',
  },
});
