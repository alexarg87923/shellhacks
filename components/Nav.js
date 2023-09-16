import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

function Nav() {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('Home')}>
        <Icon name="home" size={20} color="white" />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('Search')}>
        <Icon name="search" size={20} color="white" />
        <Text style={styles.navText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('Notifications')}>
        <Icon name="bell" size={20} color="white" />
        <Text style={styles.navText}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('Messages')}>
        <Icon name="envelope" size={20} color="white" />
        <Text style={styles.navText}>Messages</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('Profile')}>
        <Icon name="user" size={20} color="white" />
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#333',
    padding: 10,
  },
  navItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  navText: {
    color: 'white',
    marginTop: 5,
  }
});

export default Nav;
