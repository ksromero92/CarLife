import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { Image } from "react-native-elements";
import { size } from "lodash";
import { useNavigation } from "@react-navigation/native";

export default function HomeList() {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
      title: "Vehiculos",
      Desc: "Registra tus vehiculos",
      img: require("../../../assets/img/HomeCar3.png"),
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bv",
      title: "Eventos",
      Desc: "LLena el diario de tus vehiculos",
      img: require("../../../assets/img/HomeCalendar3.png"),
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bc",
      title: "Alertas",
      Desc: "Crea tus alertas",
      img: require("../../../assets/img/HomeAlert3.png"),
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bx",
      title: "Reportes",
      Desc: "Enterate del rendimiento de tus \nvehiculos",
      img: require("../../../assets/img/HomeBar3.png"),
    },
  ];
  const Item = ({ item }) => {
    return (
      <View style={styles.item}>
        <View style={styles.viewItemImage}>
          <Image
            resizeMode="cover"
            PlaceholderContent={<ActivityIndicator color="fff" />}
            source={item.img}
            style={styles.imageItem}
          />
        </View>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.ItemDescription}>{item.Desc}</Text>
        </View>
      </View>
    );
  };
  const renderItem = ({ item }) => <Item item={item} />;
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#e3e3e3",
    margin: 12,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
  },
  title: {
    fontSize: 32,
  },
  viewItemImage: {
    marginRight: 15,
  },
  imageItem: {
    width: 75,
    height: 75,
  },
  ItemDescription: {
    paddingTop: 2,
    color: "grey",
    width: 300,
  },
});
