import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Counter from './Counter';
import Username from './Username';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to PCL!</Text>
      <Image
        source={{
          uri: 'pcl.jpg',
        }}
        style={styles.image}
      />
      <View style={styles.bottomContainer}>
        <Counter />
        <Username />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: '50%', 
    height: '50%', 
    marginBottom: 20,
  },
  bottomContainer: {
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
