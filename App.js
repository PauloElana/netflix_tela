import React, { useRef } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

const movies = [
  {
    id: '1',
    title: 'Homem-Aranha',
    image: 'https://image.tmdb.org/t/p/w500/9f5sCduhD3s3FJgx8cGXYWA5Dzy.jpg',
  },
  {
    id: '2',
    title: 'Batman',
    image: 'https://image.tmdb.org/t/p/w500/mgCxpxc3ISoNyDh6gPZAr3t36kT.jpg',
  },
  {
    id: '3',
    title: 'Duna',
    image: 'https://image.tmdb.org/t/p/w500/8EJxttLOh6Mw2kU8qPNZtD5nFYW.jpg',
  },
  {
    id: '4',
    title: 'The Flash',
    image: 'https://image.tmdb.org/t/p/w500/xx0pA5L0GxG2UxyqSM1rbQZpCSj.jpg',
  },
  {
    id: '5',
    title: 'Matrix',
    image: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
  },
];

export default function App() {
  const listRef = useRef(null);

  const handlePress = (index) => {
    listRef.current.scrollToIndex({ index, animated: true });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎬 KFLIX</Text>

      <FlatList
        ref={listRef}
        data={movies}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handlePress(index)}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.movieTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingTop: 60,
    paddingLeft: 10,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingLeft: 10,
  },
  image: {
    width: width * 0.6,
    height: 280,
    borderRadius: 12,
    marginRight: 15,
  },
  movieTitle: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 8,
    fontSize: 16,
  },
});
