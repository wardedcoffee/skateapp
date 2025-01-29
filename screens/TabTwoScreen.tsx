import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import { ScrollView } from 'react-native';
import MovieList from '../components/MovieList';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <MovieList />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    marginRight: -16,
  },
});
