import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const Internal = ({route}) => {
  const {burger} = route.params;
  const [quantity, setQuantity] = useState(1);
  const [price] = useState(burger.price);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={{width: 400, height: 400}}
        resizeMode="contain"
        source={{
          uri: burger.img,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <View>
          <Text style={styles.textHeaderBottom}>{burger.name}</Text>
          <Text style={styles.textHeaderBottom}>{burger.descripton}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={handleDecrement}
            style={{
              backgroundColor: 'white',
              width: 30,
              height: 30,
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontSize: 20,
                alignSelf: 'center',
              }}>
              -
            </Text>
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 20, marginHorizontal: 10}}>
            {quantity}
          </Text>
          <TouchableOpacity
            onPress={handleIncrement}
            style={{
              backgroundColor: 'white',
              width: 30,
              height: 30,
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontSize: 20,
                alignSelf: 'center',
              }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          color: '#b2b2b2',
          fontWeight: '300',
          fontSize: 14,
          marginBottom: 20,
        }}>
        {burger.name} {burger.descripton} served with fries and drink. Enjoy our
        20% off offer with NEW
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 25,
        }}>
        <View>
          <Text style={{color: 'white', fontSize: 20}}>Total Price</Text>
          <Text style={{color: 'green', fontSize: 20}}>
            U${(price * quantity).toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F0B321',
            width: 150,
            height: 50,
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,
            borderBottomLeftRadius: 50,
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
            }}>
            Order Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Internal;
