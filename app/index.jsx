import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const modal = () => {
  // Array of avatars where each entry is an object with the image and the path
  const avatars = [
    {
      id: 1,
      path: "../assets/Avetar/man-1.jpg",
      image: require("../assets/Avetar/man-1.jpg"),
    },
    {
      id: 2,
      path: "../assets/Avetar/man-2.jpg",
      image: require("../assets/Avetar/man-2.jpg"),
    },
    {
      id: 3,
      path: "../assets/Avetar/man-3.jpg",
      image: require("../assets/Avetar/man-3.jpg"),
    },
    {
      id: 4,
      path: "../assets/Avetar/man-4.jpg",
      image: require("../assets/Avetar/man-4.jpg"),
    },
    {
      id: 5,
      path: "../assets/Avetar/man-5.jpg",
      image: require("../assets/Avetar/man-5.jpg"),
    },
    {
      id: 6,
      path: "../assets/Avetar/girls-1.jpg",
      image: require("../assets/Avetar/girls-1.jpg"),
    },
    {
      id: 7,
      path: "../assets/Avetar/girls-2.jpg",
      image: require("../assets/Avetar/girls-2.jpg"),
    },
    {
      id: 8,
      path: "../assets/Avetar/girls-3.jpg",
      image: require("../assets/Avetar/girls-3.jpg"),
    },
    {
      id: 9,
      path: "../assets/Avetar/girls-4.jpg",
      image: require("../assets/Avetar/girls-4.jpg"),
    },
    {
      id: 10,
      path: "../assets/Avetar/girls-5.jpg",
      image: require("../assets/Avetar/girls-5.jpg"),
    },
    {
      id: 11,
      path: "../assets/Avetar/girls-6.jpg",
      image: require("../assets/Avetar/girls-6.jpg"),
    },
  ];

  // State to store the selected image object
  const [selectedImage, setSelectedImage] = useState(avatars[0]);

  const saveAvatar = () => {
    alert(`Selected Avatar Path: ${selectedImage.path}`);
    // Pass the selected image path or other necessary information
    // e.g., navigation.navigate('Home', { avatarUrl: selectedImage.path });
  };

  return (
    <ScrollView>
      <View className="flex items-center mt-10 mr-4 ml-4 ">
        <Image
          className="w-full h-80 rounded-xl"
          source={selectedImage.image}
        />
      </View>
      <View>
        <View className="items-center mt-6">
          <Text className="text-3xl font-bold">Select Your Avatar</Text>
        </View>

        <ScrollView
          nestedScrollEnabled={true}
          className="border-4 m-2 rounded-lg"
          style={{ height: 250 }} // Adjust this height based on your needs
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View className="m-2 flex flex-row flex-wrap justify-between">
            {avatars.map((avatar) => (
              <TouchableOpacity
                key={avatar.id}
                onPress={() => setSelectedImage(avatar)}
              >
                <Image
                  className="object-cover h-36 w-36 rounded-xl m-2"
                  source={avatar.image}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={saveAvatar}
          className="border bg-indigo-500 p-3 m-5 rounded-lg items-center justify-center left-0 right-0 slef-center "
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
            Save the Avatar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default modal;
