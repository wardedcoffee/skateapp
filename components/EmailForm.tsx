import React, { useState } from "react";
import { TextInput, Button, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { Text, View } from "../components/Themed";
import * as FileSystem from "expo-file-system";
import Toast from "react-native-root-toast";
import ImagePicker from "./ImagePicker";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [isSaved, setIsSaved] = useState(false);

   const [isExit, setIsExit] = useState(false);
      const navigation = useNavigation();
      const handlePress = () => {
          setIsExit(!isExit);
          console.log('vou sairrrrrr!');
           navigation.navigate('Login')    
      };

  const saveForm = async () => {
    try {
      const fileInfo = await FileSystem.getInfoAsync(
        FileSystem.documentDirectory + "formData.json",
      );
      let data: {
        email: string;
        name: string;
        phone: string;
        password: string;
        imageUri?: string;
      }[] = [];

      if (!fileInfo.exists) {
        await FileSystem.writeAsStringAsync(
          FileSystem.documentDirectory + "formData.json",
          JSON.stringify(data),
        );
        console.log("if data", data);
      } else {
        const fileContents = await FileSystem.readAsStringAsync(
          FileSystem.documentDirectory + "formData.json",
        );
        data = JSON.parse(fileContents);
        console.log("else data", data);
        console.log("Number of users:", data.length);
        console.log("Last user:", data[data.length - 1]);
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^(?:\+?55)?\d{10,11}$/;   // Matches +5511977818925 or 11977818925


      function validateEmail(email: string) {
        return emailRegex.test(email);
      }

      function validatePhone(phone: string) {
        return phoneRegex.test(phone);
      }

      if (
        validateEmail(email) &&
        validatePhone(phone) &&
        name != null &&
        password != null
      ) {
        data.push({ email, name, phone, password });
        await FileSystem.writeAsStringAsync(
          FileSystem.documentDirectory + "formData.json",
          JSON.stringify(data),
        );
        // setEmail('');
        // setName('');
        // setPhone('');
        // setPassword('');
      } else {
        let toast = Toast.show(
          "Por favor verifique os dados. Tenha certeza de que o email e telefone são válidos.",
          {
            duration: Toast.durations.LONG,
          },
        );

        setTimeout(function hideToast() {
          Toast.hide(toast);
        }, 5000);
        return;
      }
    } catch (err) {
      console.error(err);
    }

    console.log(`'Formulário salvo!'` + name + phone + email + password);
    setIsSaved(!isSaved);

    let toast2 = Toast.show(
      `'Formulário salvo!'`,
      {
        duration: Toast.durations.LONG,
      },
    );

    setTimeout(function hideToast() {
      Toast.hide(toast2);
    }, 5000);
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          width: 220,
          marginLeft: 16,
          marginTop: 16,
          marginBottom: 32,
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8,
          justifyContent: "space-around",
        }}
      >
        <ImagePicker />
        <View style={{ flexDirection: "column", marginLeft: 36 }}>
          <Text style={styles.title}> {name} </Text>
          <Text style={styles.videoInfo}>33 videos assistidos</Text>
        </View>
      </View>
      <Text style={styles.tabSelected}>Informações pessoais</Text>

      <View
        style={styles.separator}
        lightColor="#313131"
        darkColor="rgba(255,255,255,0.1"
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.labelPerfil}>Nome</Text>
          <TextInput
            placeholder="Seu nome"
            value={name}
            onChangeText={setName}
            style={styles.infoPerfil}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons
            name={"chevron-right"}
            size={24}
            color={"#33EEDD"}
            style={{ marginLeft: 10, marginBottom: 20 }}
          />
        </View>
      </View>

      <View
        style={styles.separator}
        lightColor="#313131"
        darkColor="rgba(255,255,255,0.1"
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.labelPerfil}>Telefone</Text>
          <TextInput
            placeholder="(xx) xxxxx xxxx"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            style={styles.infoPerfil}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons
            name={"chevron-right"}
            size={24}
            color={"#33EEDD"}
            style={{ marginLeft: 10, marginBottom: 20 }}
          />
        </View>
      </View>

      <View
        style={styles.separator}
        lightColor="#313131"
        darkColor="rgba(255,255,255,0.1"
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.labelPerfil}>Email</Text>
          <TextInput
            placeholder="Seu email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            style={styles.infoPerfil}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons
            name={"chevron-right"}
            size={24}
            color={"#33EEDD"}
            style={{ marginLeft: 10, marginBottom: 20 }}
          />
        </View>
      </View>

      <View
        style={styles.separator}
        lightColor="#313131"
        darkColor="rgba(255,255,255,0.1"
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.labelPerfil}>Senha</Text>
          <TextInput
            placeholder="Sua senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.infoPerfil}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons
            name={"chevron-right"}
            size={24}
            color={"#33EEDD"}
            style={{ marginLeft: 10, marginBottom: 20 }}
          />
        </View>
      </View>

      <View
        style={styles.separator}
        lightColor="#313131"
        darkColor="rgba(255,255,255,0.1"
      />

      <View>
          {isSaved ? (
              <TouchableOpacity onPress={(handlePress)}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={{ fontFamily: "quicksand-regular", fontSize: 16, lineHeight: 20, margin: 0 }}>Sair da minha conta</Text>
                  <MaterialIcons 
                    name={'exit-to-app'}
                    size={24}
                    color={isExit ? '#33EEDD' : '#176E66'   } 
                    style={{ marginLeft: 10, marginBottom: 20 }}
                    />
                </View>
            </TouchableOpacity>
          ) : (
            <>
            
            {/* <Button title="Finalizar cadastro" onPress={saveForm} /> */}
            
            <Pressable style={styles.buttonDefault} onPress={saveForm}>
              <Text style={styles.textButtons}>Finalizar cadastro</Text>
            </Pressable></>
          )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fafafa",
  },
  card: {
    marginBottom: 48,
    marginLeft: 16,
    maxWidth: 350,
  },
  flexDirection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  tabSelected: {
    fontFamily: "quicksand-bold",
    fontSize: 16,
    marginRight: 22,
    marginBottom: 0,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  textButtons:{
    textAlign: 'center',
    fontFamily: 'quicksand-bold',
    // fontWeight: '700',
    fontSize: 16,
    color: '#fff',
    margin: 0,
  },
  buttonDefault: {
    // width: 300,
    padding: 20,
    // margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#33EEDD',
    borderRadius: 8
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
  title: {
    fontFamily: "quicksand-bold",
    fontSize: 22,
    lineHeight: 28,
    marginTop: 10,
    marginBottom: 8,
  },
  videoInfo: {
    fontFamily: "quicksand-regular",
    fontSize: 14,
    lineHeight: 18,
  },
  labelPerfil: {
    fontFamily: "quicksand-light",
    fontSize: 12,
    lineHeight: 15,
    marginBottom: 4,
  },
  infoPerfil: {
    fontFamily: "quicksand-regular",
    fontSize: 16,
    lineHeight: 20,
    margin: 0,
    width: 200,
  },
  separator: {
    marginVertical: 16,
    height: 1,
    opacity: 0.1,
  },
  perfil: {
    position: "relative",
    height: 90,
    width: 90,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
