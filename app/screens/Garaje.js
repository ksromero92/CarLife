import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";
// import { Dropdown } from 'react-native-material-dropdown';
import { useNavigation } from "@react-navigation/native";
import GarajeDetalle from "../components/Garaje/GarajeDetalle";

export default function Garaje() {
  let data = [
    // {
    //   value: "ABC123",
    // },
    // {
    //   value: "DEF456",
    // },
    // {
    //   value: "GHI789",
    // },
  ];
  return (
    <View style={styles.viewHome}>
      <View style={styles.viewHomeText}>
        {/* <Dropdown
          label="Vehiculo"
          data={data}
          onChangeText={(value) => {
            alert(value);
          }}
        /> */}
      </View>
      {/* <Divider style={styles.DividerStyle}></Divider> */}
      <View>
        {/* <GarajeDetalle /> */}
        <CreateCuenta/>
      </View>
    </View>
  );
}

function CreateCuenta() {
  const navigation = useNavigation();
  return (
    <View style={styles.ContainerInfoStyle}>
    <Text style={styles.TextInfoStyle}>
      ¡Oops aun no tienes Vehiculos registrados!
    </Text>
    <Button
        title="Registra tu vehiculo"
        containerStyle={styles.BtnContainerStyle}
        buttonStyle={styles.btnStyle}
        onPress={() => navigation.navigate("addVehiculoByGaraje")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewHome: {
    minHeight: "100%",
    backgroundColor: "#f2f2f2",
  },
  viewHomeText: {
    backgroundColor: "#f2f2f2",
    margin: 15,
    // paddingTop: 20,
    // paddingBottom: 20,
  },
  displayName: {
    fontSize: 25,
    fontWeight: "bold",
  },
  ContainerInfoStyle: {
    alignItems: "center",
    marginTop: "40%",
    // marginLeft: 35,
    // marginRight: 10,
  },
  TextInfoStyle:{
    fontSize: 17,
    fontWeight: "bold",
  },
  TextBtnRegisterStyle: {
    color: "#3F89CF",
    fontWeight: "bold",
  },
  BtnContainerStyle: {
    width: "55%",
    marginTop: 20,
  },
  btnStyle: {
    backgroundColor: "#3F89CF",
  },
});
