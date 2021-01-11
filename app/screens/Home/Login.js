import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  return (
    <ScrollView>
      <Image
        source={require("../../../assets/img/LogoCarLife.png")}
        resizeMode="contain"
        style={styles.LogoStyle}
      />
      <View style={styles.viewContainerStyle}>
        <Text>Login Form</Text>
        <CreateCuenta />
      </View>
      <Divider style={styles.DividerStyle}></Divider>
      <Text>Social Login</Text>
    </ScrollView>
  );
}

function CreateCuenta() {
  const navigation = useNavigation();
  return (
    <Text style={styles.TextRegisterStyle}>
      ¿Aun no tiene una cuenta?{" "}
      <Text
        style={styles.TextBtnRegisterStyle}
        onPress={() => navigation.navigate("register")}
      >
        Regístrate
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  LogoStyle: {
    height: 150,
    width: "100%",
    marginTop: 20,
  },
  viewContainerStyle: {
    marginRight: 40,
    marginLeft: 40,
  },
  TextRegisterStyle: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  TextBtnRegisterStyle: {
    color: "#006DAA",
    fontWeight: "bold",
  },
  DividerStyle: {
    backgroundColor: "#003559",
    margin: 40,
  },
});
