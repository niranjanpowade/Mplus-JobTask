import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductListScreen = ({ route }) => {
  const { category } = route.params;

  const products = {
    "Mobile Phones": [
      {
        id: "1",
        name: "Iphone 11",
        imageUri: require("./images/iphone11.jpg"),
        description:
          "The iPhone 11 boasts a gorgeous all-screen Liquid Retina LCD that is water resistant up to 2 metres for up to 30 minutes. Moreover, the ultra-wide 13 mm lens has a 120-degree field of view for four times more scenes, and the 26 mm wide lens provides up to 100% Autofocus in low light.",
      },
      {
        id: "2",
        name: "Iphone 13",
        imageUri: require("./images/iphone13.jpg"),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: "3",
        name: "Iphone 14",
        imageUri: require("./images/iphone14plus.jpg"),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: "4",
        name: "Samsung galaxy s21",
        imageUri: require("./images/samsungs21.jpg"),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: "5",
        name: "Poco M2",
        imageUri: require("./images/pocom2.jpg"),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: "6",
        name: "samsung Galaxy 22",
        imageUri: require("./images/samsungs22.jpg"),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: "7",
        name: "Realme Narzo 50a",
        imageUri: require("./images/narazo50a.jpg"),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: "iphone 11 64 Gb",
        name: "",
        imageUri: require("./images/iphone11.jpg"),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: "9",
        name: "Iphone 13 64 Gb",
        imageUri: require("./images/iphone13.jpg"),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      // Add more mobile models here
      // ...
    ],
    // Add products for other categories
    // ...
  };

  const productList = products[category];
  const numColumns = 2;
  const itemWidth = Dimensions.get("window").width / numColumns;

  const navigation = useNavigation();

  const handleProductPress = (product) => {
    navigation.navigate("ProductDescription", { product });
  };

  const renderProductItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleProductPress(item)}>
        <View style={[styles.productItem, { width: itemWidth }]}>
          <Image
            source={item.imageUri}
            style={styles.productImage}
            resizeMode="contain"
          />
          <Text style={styles.productName}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category}</Text>
      <FlatList
        data={productList}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productListContainer}
        numColumns={numColumns}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  productListContainer: {
    width: "100%",
  },
  productItem: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
  },
  productImage: {
    width: "80%",
    height: 150,
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default ProductListScreen;
