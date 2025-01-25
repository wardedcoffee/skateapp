import React, { useState } from "react";
import { TextInput, Button, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import * as FileSystem from "expo-file-system";
import Toast from "react-native-root-toast";
import ImagePicker from "./ImagePicker";
import { MaterialIcons } from "@expo/vector-icons";
import ExitApp from "../components/ExitToApp.tsx";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [isSaved, setIsSaved] = useState(false);

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
      }[] = [];

      if (!fileInfo.exists) {
        await FileSystem.writeAsStringAsync(
          FileSystem.documentDirectory + "formData.json",
          JSON.stringify(data),
        );
      } else {
        const fileContents = await FileSystem.readAsStringAsync(
          FileSystem.documentDirectory + "formData.json",
        );
        data = JSON.parse(fileContents);
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10}$/;

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
          "Please check the entered data. Ensure email and phone number are valid.",
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

    console.log(`'Form data saved!'` + name + phone + email + password);
    setIsSaved(!isSaved);

    let toast2 = Toast.show(
      `'Form data saved!'` + name + phone + email + password,
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
          {/* <Text style={styles.infoPerfil}>Mariana Quaresma</Text> */}
          <TextInput
            placeholder="Enter name"
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
            placeholder="Enter phone number"
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
            placeholder="Enter email address"
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
            placeholder="Enter password"
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
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
            {isSaved ? (
                <ExitApp />
            ) : (
              <Button title="Save" onPress={saveForm} />
            )}
        </View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    // backgroundColor: '#FAFAFA',
    // alignItems: 'center',
    // justifyContent: 'center',
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
    // color: '#313131',
    marginRight: 22,
    marginBottom: 0,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
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
    // fontWeight: 'bold',
    // color: 'black'
  },
  videoInfo: {
    fontFamily: "quicksand-regular",
    fontSize: 14,
    lineHeight: 18,
    // margin: 0,
    // color: 'black'
  },
  labelPerfil: {
    fontFamily: "quicksand-light",
    fontSize: 12,
    lineHeight: 15,
    marginBottom: 4,
    // opacity: 70,
  },
  infoPerfil: {
    fontFamily: "quicksand-regular",
    fontSize: 16,
    lineHeight: 20,
    margin: 0,
    // opacity: 50,
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
