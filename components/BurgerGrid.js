import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';

const BurgerGrid = ({burger}) => {
  return (
    <TouchableOpacity>
      <View style={{width: 170, height: 170}}>
        <Image
          style={{flex: 1}}
          source={{uri: burger.img}}
          resizeMode="contain"
        />
      </View>
      <View style={{alignSelf: 'center'}}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 16,
            marginBottom: 3,
          }}>
          {burger.name}
        </Text>
        <Text style={{color: '#b2b2b2', marginBottom: 3}}>
          {burger.descripton}
        </Text>
        <Text style={{color: 'green', fontWeight: 'bold'}}>{burger.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BurgerGrid;
