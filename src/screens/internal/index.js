import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/dist/Feather';

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
        style={{width: 400, height: 400, alignSelf: 'center'}}
        resizeMode="contain"
        source={{
          uri: burger.img,
        }}
      />
      <View style={styles.boxTitleContainer}>
        <View>
          <Text style={styles.textHeaderBottom}>{burger.name}</Text>
          <Text style={styles.textHeaderBottom}>{burger.descripton}</Text>
        </View>
        <View style={styles.boxQuantity}>
          <TouchableOpacity
            onPress={handleDecrement}
            style={styles.styleButton}>
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
            style={styles.styleButton}>
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
      <Text style={styles.burgerDescription}>
        {burger.name} {burger.descripton} served with fries and drink. Enjoy our
        20% off offer with NEW
      </Text>
      <View style={styles.boxBottomContainer}>
        <View>
          <Text style={{color: 'white', fontSize: 20}}>Total Price</Text>
          <Text style={{color: 'green', fontSize: 20, fontWeight: 'bold'}}>
            U${(price * quantity).toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity style={styles.buttonOrderNow}>
          <Text style={styles.orderNowText}>Order Now</Text>
          <View style={styles.boxBagCircle}>
            <Icon name="shopping-bag" size={18} color="#000" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Internal;
