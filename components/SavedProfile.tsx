import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { MaterialIcons } from "@expo/vector-icons";
import ExitApp from "../components/ExitToApp";
import ImagePicker from "../components/ImagePicker";

export default function SavedProfile() {
    return (
        <>
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
                    <Text style={styles.title}>Mariana Q.</Text>
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
                    <Text style={styles.infoPerfil}>Mariana Quaresma</Text>
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
                    <Text style={styles.labelPerfil}>E-mail</Text>
                    <Text style={styles.infoPerfil}>mariana@alura.com.br</Text>
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
                    <Text style={styles.infoPerfil}>(21) 23782-9988</Text>
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
                    <Text style={styles.infoPerfil}>***********</Text>
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
                    <Text style={styles.infoPerfil}>Sair da minha conta</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <ExitApp />
                </View>
            </View>
        </>
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
