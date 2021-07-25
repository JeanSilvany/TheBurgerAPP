import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const TopBar = () => {
  return (
    <View style={styles.topBar}>
      <View>
        <Text>Icon1</Text>
      </View>
      <View>
        <Text>Icon2</Text>
      </View>
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
