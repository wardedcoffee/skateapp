import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image, Pressable, GestureResponderEvent } from 'react-native';

import { Text, View } from '../components/Themed';

export default function Login() {
  function onPressFunctionGoogle(event: GestureResponderEvent): void {
    console.log("clique no botao Google")
    throw new Error('Function not implemented.');
  }
  function onPressFunctionEmail(event: GestureResponderEvent): void {
    console.log("clique no botao email")
    throw new Error('Function not implemented.');
  }

  return (
    <View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <Image  style={{ resizeMode: 'cover', maxHeight: 500}}  source={require('../assets/images/pexels_tima_miro.jpg')}></Image>
      <View style={styles.container}>
        <Image source={require('../assets/images/SkateAppLogo.png')}></Image>
        <Pressable style={styles.buttonGoogle} onPress={onPressFunctionGoogle}>
          <Text style={styles.textButtons}>Entrar com Google</Text>
        </Pressable>
        <Pressable style={styles.buttonDefault} onPress={onPressFunctionEmail}>
          <Text style={styles.textButtons}>Entrar com e-mail</Text>
        </Pressable>
      </View>
      {/* <Text>Photo by Tima Miroshnichenko: https://www.pexels.com/photo/a-group-of-people-sitting-on-wooden-bleachers-holding-smartphones-5560297/</Text> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 12,
    marginBottom: 32
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textButtons:{
    textAlign: 'center',
    fontFamily: 'quicksand-bold',
    // fontWeight: '700',
    fontSize: 16,
    color: '#fff',
    margin: 0,
  },
  buttonGoogle:{
    width: 300,
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#DD4B39',
    borderRadius: 8
  },
  buttonDefault: {
    width: 300,
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#33EEDD',
    borderRadius: 8
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
