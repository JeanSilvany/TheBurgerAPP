import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';

const TopBar = () => {
  return (
    <View style={styles.topBar}>
      <TouchableOpacity>
        <Icon name="menu" size={25} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="search" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topBar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
