import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

function Profile() {
    const [profile, setProfile] = useState({
        name: 'John Doe',
        age: '25',
        about: 'I am a software developer with a passion for mobile app development.',
        seeking: ['Job', 'Mentorship', 'Networking'],
        moreAbout: 'I love hiking, reading, and playing video games in my free time.'
    });

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Profile</Text>

            {/* Name Section */}
            <Text style={styles.title}>Name:</Text>
            <TextInput 
                style={styles.input} 
                value={profile.name} 
                onChangeText={(name) => setProfile(prev => ({ ...prev, name }))} 
            />

            {/* Age Section */}
            <Text style={styles.title}>Age:</Text>
            <TextInput 
                style={styles.input} 
                value={profile.age} 
                onChangeText={(age) => setProfile(prev => ({ ...prev, age }))} 
            />

            {/* About Me Section */}
            <Text style={styles.title}>About Me:</Text>
            <TextInput 
                style={styles.input} 
                value={profile.about} 
                onChangeText={(about) => setProfile(prev => ({ ...prev, about }))} 
                multiline 
            />

            {/* More About Me Section */}
            <Text style={styles.title}>More About Me:</Text>
            <TextInput 
                style={styles.input} 
                value={profile.moreAbout} 
                onChangeText={(moreAbout) => setProfile(prev => ({ ...prev, moreAbout }))} 
                multiline 
            />

            {/* Seeking Section */}
            <Text style={styles.title}>Seeking:</Text>
            <View style={styles.seekingContainer}>
                {profile.seeking.map((item, index) => (
                    <Text key={index} style={styles.oval}>{item}</Text>
                ))}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f7f7f7',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    content: {
        fontSize: 16,
        color: '#555',
        marginTop: 5,
    },
    seekingContainer: {
        flexDirection: 'row',
        marginTop: 5,
        flexWrap: 'wrap',
    },
    oval: {
        backgroundColor: '#e0e0e0',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginRight: 10,
        marginBottom: 10,
    },
    input: {
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 8,
        borderRadius: 4,
        fontSize: 16,
        marginTop: 5,
    },
});

export default Profile;
