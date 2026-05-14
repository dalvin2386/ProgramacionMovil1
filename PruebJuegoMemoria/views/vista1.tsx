import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const MyCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}></Text>
      <Text>{}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default MyCard;