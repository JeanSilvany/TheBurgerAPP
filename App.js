import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import List from './components/List';
import BurgerGrid from './components/BurgerGrid';

const menuItems = [
  {
    id: 1,
    title: 'Burger',
  },
  {
    id: 2,
    title: 'Pasta',
  },
  {
    id: 3,
    title: 'Salads',
  },
];

const data = [
  {
    name: 'Beef Burger',
    descripton: 'Onion with cheese',
    price: '$18,00',
    img: 'https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4135.png',
  },
  {
    name: 'Chicken Burger',
    descripton: 'Cheese with chiken',
    price: '$12,00',
    img: 'https://www.seekpng.com/png/full/79-790996_burger-transparent-background-png-chicken-burger-png.png',
  },
  {
    name: 'Classic Burger',
    descripton: 'Beef with lettice',
    price: '$24,00',
    img: 'https://www.pngkit.com/png/full/79-790696_burger-png-pic-rustlers-flame-grilled-gourmet-classic.png',
  },
  {
    name: 'Grilled Burger',
    descripton: 'Griller Chicken',
    price: '$14,00',
    img: 'https://zakifoodbucket.com/wp-content/uploads/2021/06/grilled-chicken-burger.png',
  },
];

const TheBurger = () => {
  const [menu, setMenu] = useState(1);
  const renderItem = ({item}) => <BurgerGrid burger={item} />;
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View>
          <Text>Icon1</Text>
        </View>
        <View>
          <Text>Icon2</Text>
        </View>
      </View>
      <View>
        <View>
          <Text style={styles.textHeaderTop}>Every Bite a</Text>
        </View>
        <View>
          <Text style={styles.textHeaderBottom}>Better burger!</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 30,
        }}>
        {menuItems.map(e => (
          <List
            key={e.id}
            item={e}
            menu={menu === e.id && true}
            handleButton={() => {
              setMenu(e.id);
            }}
          />
        ))}
        <TouchableOpacity>
          <Text>Icon</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={renderItem}
        columnWrapperStyle={{flex: 1, justifyContent: 'space-around'}}
      />
    </View>
  );
};

export default TheBurger;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#232227',
  },
  topBar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textHeaderTop: {
    marginTop: 80,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  textHeaderBottom: {
    color: '#b2b2b2',
    fontWeight: '300',
    fontSize: 20,
  },
});
