import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles';

const Header = () => {
  return(
      <View style={styles.container}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#000000', '#051050']} style={styles.linearGradient}>
            <Image style={styles.logo} source={require('../../assets/marvel-logo.png')} />
            <Text style={styles.text}>Comics Store</Text>
            <TouchableOpacity style={{ }}>
              <Image style={styles.glass} source={require('../../assets/glass.png')}/>
            </TouchableOpacity>
        </LinearGradient>
      </View>
  );
}

export default Header;