import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/logo.png';

function Navbar() {
    const navigation = useNavigation();

    return (
        <View style={styles.navbar}>
        <TouchableOpacity style={[styles.iconContainer, { alignItems: 'flex-start' }]} onPress={() => navigation.navigate('Profile')}>
          <Icon name="person-circle" size={50} color="grey" />
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Home')}>
          <Image
            source={logo}
            style={{ width: 140, height: 100 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
  
        <TouchableOpacity style={[styles.iconContainer, { alignItems: 'flex-end' }]} onPress={() => navigation.navigate('Messages')}>
          <Icon name="chatbubble-ellipses" size={50} color="grey" />
        </TouchableOpacity>
      </View>
    );
  }
  
const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
        paddingHorizontal: 10,
        backgroundColor: 'rgb(242,242,242)',
        paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight
    },
    iconContainer: {
        alignItems: 'center', 
    },
});
  

export default Navbar;
