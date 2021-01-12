import React from "react";
import {StyleSheet, View, Text, Button } from "react-native";
import * as firebase from "firebase";

export default function UserLogged() {
  return (
    <View>
      <Text>UserLogged...</Text>
      <Button
        title="Cerrar sesión"
        containerStyle={styles.BtnContainerStyle}
        buttonStyle={styles.btnStyle}
        onPress={() => firebase.auth().signOut()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  BtnContainerStyle: {
    width: "95%",
    marginTop: 20,
  },
  btnStyle: {
    backgroundColor: "#006DAA",
  },
});
