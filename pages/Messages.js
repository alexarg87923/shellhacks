import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

function Messages() {
  const [users, setUsers] = useState([
    {
      id: '1',
      name: 'John Doe',
      profilePic: 'https://placeimg.com/64/64/people',
      lastMessage: 'Hey there!'
    },
    {
      id: '2',
      name: 'Jane Smith',
      profilePic: 'https://placeimg.com/64/64/people',
      lastMessage: 'How are you?'
    },
    // Add more fake users as desired
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Image source={{ uri: item.profilePic }} style={styles.profilePic} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.lastMessage}>{item.lastMessage}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd'
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  lastMessage: {
    fontSize: 14,
    color: '#888'
  }
});

export default Messages;
