import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ImageBackground, Dimensions, StyleSheet, Animated, PanResponder } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function Home() {
    const [data, setData] = useState([
      {
        image: 'https://picsum.photos/id/237/200/300',
        name: 'John Doe',
        age: 25,
        online: true,
        minutes_online: 42
      },
    ]);

    const [currentData, setCurrentData] = useState({
        image: null,
        name: '',
        age: 0,
        online: false,
        minutes_online: 0
    });
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    const position = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                position.setValue({ x: gesture.dx, y: gesture.dy });
            },
            onPanResponderRelease: (event, gesture) => {
                if (gesture.dx > 120) {
                    swipeOut('right');
                } else if (gesture.dx < -120) {
                    swipeOut('left');
                } else {
                    resetPosition();
                }
            }
        })
    ).current;

    const getCardStyle = () => {
        const rotate = position.x.interpolate({
            inputRange: [-screenWidth * 2.0, 0, screenWidth * 2.0],
            outputRange: ['-120deg', '0deg', '120deg']
        });

        return {
            ...position.getLayout(),
            transform: [{ rotate }]
        };
    };

    const swipeOut = (direction) => {
        const x = direction === 'right' ? screenWidth : -screenWidth;
        Animated.timing(position, {
            toValue: { x, y: 0 },
            duration: 400,
            useNativeDriver: false
        }).start(() => {
            position.setValue({ x: 0, y: 0 });
            setCurrentData(data[0]);
            setData(prevData => prevData.slice(1));
        });
    };

    const resetPosition = () => {
        Animated.spring(position, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false
        }).start();
    };

    useEffect(() => {
        if (data && data.length > 0) {
            setCurrentData(data[0]);
        }
    }, [data]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Animated.View
                {...panResponder.panHandlers}
                style={[getCardStyle(), styles.card]}
            >
                <ImageBackground
                    source={{ uri: currentData.image }}
                    style={[styles.imageBackground, { width: screenWidth * 0.96, height: screenHeight * 0.6 }]}
                    resizeMode="cover"
                >
                    <LinearGradient
                        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.7)']}
                        locations={[0, 0.8]}
                        style={StyleSheet.absoluteFill}
                    />
                          <View style={{ 
                            position: 'absolute', 
                            bottom: 10, 
                            left: 10
                        }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginRight: 10 }}>
                                {currentData.name}, {currentData.age} years
                              </Text>
                            </View>
                            <Text style={styles.middleDot}>·</Text>
                            <Text style={{ fontSize: 18, color: 'white' }}>Curator at Christie's Auction House</Text>
                            <Text style={{ fontSize: 18, color: 'white' }}>6 Mutual Friends</Text>
                        </View>
                </ImageBackground>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: Dimensions.get('window').width * 0.96,
        height: Dimensions.get('window').height * 0.6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageBackground: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    middleDot: {
        fontSize: 80,
        position: 'absolute',
        top: -40,
        left: 178,
        textAlignVertical: 'center',
        color: 'lightgreen'
    }
});

export default Home;