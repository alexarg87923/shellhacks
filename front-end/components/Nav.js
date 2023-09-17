import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from '@react-navigation/native';

function Navbar() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.navbar, { paddingTop: insets.top }]}>
      <Icon name="person-circle" size={30} color="#000" style={styles.iconLeft} />
      <Icon name="chatbubble-ellipses" size={30} color="grey" style={styles.iconRight} />
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconLeft: {
    position: 'absolute',
    left: 10,
  },
  iconRight: {
    position: 'absolute',
    right: 10,
  }
});

export default Navbar;
