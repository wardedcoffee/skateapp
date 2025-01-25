import { StyleSheet, ScrollView } from "react-native";
import { View } from "../components/Themed";
import EmailForm from "../components/EmailForm";
import SavedProfile from "../components/SavedProfile";

export default function TabThreeScreen() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <EmailForm />
            </ScrollView>
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
