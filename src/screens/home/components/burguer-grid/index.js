import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const BurgerGrid = ({burger}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Internal', {burger: burger});
      }}>
      <View style={{width: 170, height: 170}}>
        <Image
          style={{flex: 1}}
          source={{uri: burger.img}}
          resizeMode="contain"
        />
      </View>
      <View style={{alignSelf: 'center'}}>
        <Text style={styles.burgerName}>{burger.name}</Text>
        <Text style={{color: '#b2b2b2', marginBottom: 3}}>
          {burger.descripton}
        </Text>
        <Text style={styles.textPrice}>U${burger.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BurgerGrid;
