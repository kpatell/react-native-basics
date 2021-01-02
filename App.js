import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  const handlePress = () => console.log("text pressed");
  // console.log(require("./assets/icon.png"));

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines = {1} onPress = {handlePress}>testing text</Text>
      <Image
        blurRadius = {10} 
        source = {{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
