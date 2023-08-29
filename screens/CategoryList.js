import React, { useRef, useEffect, useState, useMemo } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const CategoryScreen = () => {
  const navigation = useNavigation();

  const categories = [
    { id: "1", name: "Mobile Phones" },
    { id: "2", name: "Laptops" },
    { id: "3", name: "Cameras" },
    { id: "4", name: "Watches" },
    { id: "5", name: "Tablets" },
    { id: "6", name: "Trimmers" },
  ];

  const slides = [
    {
      id: "slide0",
    },
    {
      id: "slide1",
      text: "Welcome to our store! ",
      subText: " You can now buy everything(Electronic) at one place!",
    },
    { id: "slide2", text: "Mobile Phones(Not added background)" },
    { id: "slide3", text: "Cameras" },
    { id: "slide4", text: "Watches" },
    { id: "slide5", text: "Laptops" },
    { id: "slide6", text: "Tablets" },
  ];

  const numColumns = 2;
  const sliderInterval = 800;

  const flatListRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (flatListRef.current) {
        const newIndex = (currentSlideIndex + 1) % slides.length;
        flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
        setCurrentSlideIndex(newIndex);
      }
    }, sliderInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlideIndex]);

  // Increase the following factors to adjust the size of the categories
  const categoryItemWidthFactor = 0.5;
  const categoryItemHeightFactor = 0.25;

  const itemWidth = useMemo(
    () => Dimensions.get("window").width * categoryItemWidthFactor - 20,
    []
  );
  const itemHeight = useMemo(
    () => Dimensions.get("window").height * categoryItemHeightFactor - 20,
    []
  );

  const handleCategoryPress = (category) => {
    // Navigate to ProductList screen with the selected category as a parameter
    navigation.navigate("ProductListScreen", { category });
  };

  const renderIcon = (categoryName) => {
    switch (categoryName) {
      case "Mobile Phones":
        return require("./images/mobile.png");
      case "Laptops":
        return require("./images/laptop.png");
      case "Cameras":
        return require("./images/camera.png");
      case "Watches":
        return require("./images/watch.png");
      case "Tablets":
        return require("./images/tablet.png");
      case "Trimmers":
        return require("./images/trimmer.png");
      default:
        return null;
    }
  };

  const renderSlide = ({ item }) => {
    if (item.id === "slide0") {
      // For the first slide, use ImageBackground to set the background image
      return (
        <ImageBackground
          source={require("./images/bg.jpg")}
          style={styles.slideItem}
        >
          <Text style={styles.slideText}>{item.text}</Text>
          <Text style={styles.slideSubText}>{item.subText}</Text>
        </ImageBackground>
      );
    } else {
      // For other slides, use a regular View
      return (
        <View style={styles.slideItem}>
          <Text style={styles.slideText}>{item.text}</Text>
        </View>
      );
    }
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleCategoryPress(item.name)}>
        <View
          style={[
            styles.categoryItem,
            { width: itemWidth, height: itemHeight },
          ]}
        >
          <Image source={renderIcon(item.name)} style={styles.categoryIcon} />
          <Text style={styles.categoryText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <FlatList
          ref={flatListRef}
          data={slides}
          renderItem={renderSlide}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          automaticallyAdjustContentInsets={false}
          style={styles.slider}
          contentContainerStyle={styles.sliderContentContainer}
          initialScrollIndex={currentSlideIndex}
        />
      </View>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.gridContainer}
      />
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sliderContainer: {
    height: 200,
    borderWidth: 1,
    borderColor: "gray",
    marginVertical: 10,
  },
  slider: {},
  sliderContentContainer: {},
  slideItem: {
    width: Dimensions.get("window").width,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  slideText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  slideSubText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  gridContainer: {
    justifyContent: "space-between",
    marginVertical: 20,
  },
  categoryItem: {
    padding: 10,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    backgroundColor: "lightgray",
    borderRadius: 5,
    alignItems: "center",
  },
  categoryIcon: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
