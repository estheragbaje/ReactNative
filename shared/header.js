import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground
      source={require('../assets/game_bg.png')}
      style={styles.header}
    >
      <MaterialIcons
        name="menu"
        size={30}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require('../assets/heart_logo.png')}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('screen').width,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    paddingTop: 12,
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
    height: '100%',
    alignItems: 'center',
  },
  icon: {
    position: 'relative',
    flexDirection: 'column',
    flex: 0.5,
    padding: 20,
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
    marginTop: 10
    
  },
  headerTitle: {
    flexDirection: 'row',
  
  },
});
