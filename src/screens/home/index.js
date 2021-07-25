import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import List from './components/menu-item/index';
import BurgerGrid from './components/burguer-grid/index';
import TopBar from './components/top-bar/index';
import Icon from 'react-native-vector-icons/dist/Feather';
import styles from './styles';

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
    price: 18,
    img: 'https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4135.png',
  },
  {
    name: 'Chicken Burger',
    descripton: 'Cheese with chicken',
    price: 12,
    img: 'https://www.seekpng.com/png/full/79-790996_burger-transparent-background-png-chicken-burger-png.png',
  },
  {
    name: 'Classic Burger',
    descripton: 'Beef with lettice',
    price: 24,
    img: 'https://www.pngkit.com/png/full/79-790696_burger-png-pic-rustlers-flame-grilled-gourmet-classic.png',
  },
  {
    name: 'Grilled Burger',
    descripton: 'Griller Chicken',
    price: 14,
    img: 'https://zakifoodbucket.com/wp-content/uploads/2021/06/grilled-chicken-burger.png',
  },
];

const HomeScreen = () => {
  const [menu, setMenu] = useState(1);
  const renderItem = ({item}) => <BurgerGrid burger={item} />;
  return (
    <View style={styles.container}>
      <TopBar />
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
          alignItems: 'center',
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
          <Icon name="more-horizontal" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={renderItem}
        columnWrapperStyle={{flex: 1, justifyContent: 'space-around'}}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default HomeScreen;
