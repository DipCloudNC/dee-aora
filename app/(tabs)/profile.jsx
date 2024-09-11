import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Make sure you have this package installed

const Profile = () => {
  // Sample user data
  const [user, setUser] = useState({
    avatarUrl:
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    username: "Deep Chaudhary",
    bio: "Passionate about frontend development, both mobile and web apps. My true love is building mobile apps using React Native. ",
    stats: {
      posts: 120,
      likes: "2.5K",
      comments: 500,
      shares: 150,
    },
    social: [
      {
        id: "01",
        name: "GitHub",
        icon: "logo-github",
        url: "https://github.com/dipchaudhary664",
      },
      {
        id: "02",
        name: "LinkedIn",
        icon: "logo-linkedin",
        url: "https://www.linkedin.com/in/dip-chaudhary/",
      },
    ],
  });

  const openLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  const renderSocialMediaItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => openLink(item.url)}
      className="flex-row items-center p-4 mb-4 bg-white rounded-lg shadow-md"
    >
      <Ionicons
        name={item.icon}
        size={30}
        color="orange"
        className="p-2 bg-lightblue rounded-full"
      />
      <Text className="ml-4 text-lg font-pregular">{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="bg-primary h-full p-4 border border-gray-800">
      {/* Avatar */}
      <View className="flex justify-center items-center mt-6">
        <Image
          source={{
            uri: user.avatarUrl,
          }}
          className="w-32 h-32 rounded-full border-2 border-white mb-4"
        />

        {/* Username */}
        <Text className="text-xl font-psemibold text-white">
          {user.username}
        </Text>

        {/* Bio */}
        <Text className="text-sm font-pregular text-gray-300 text-justify mt-2 ">
          {user.bio}
        </Text>
      </View>

      {/* User Stats */}
      <View className="flex-row justify-between my-6">
        <View className="items-center">
          <Text className="text-lg font-plight text-white">
            {user.stats.posts}
          </Text>
          <Text className="text-xs font-pthin text-gray-200">Posts</Text>
        </View>
        <View className="items-center">
          <Text className="text-lg font-plight text-white">
            {user.stats.likes}
          </Text>
          <Text className="text-xs font-pthin text-gray-200">Likes</Text>
        </View>
        <View className="items-center">
          <Text className="text-lg font-plight text-white">
            {user.stats.comments}
          </Text>
          <Text className="text-xs font-pthin text-gray-200">Comments</Text>
        </View>
        <View className="items-center">
          <Text className="text-lg font-plight text-white">
            {user.stats.shares}
          </Text>
          <Text className="text-xs font-pthin text-gray-200">Shares</Text>
        </View>
      </View>

      {/* Social Media Links */}
      <FlatList
        data={user.social}
        keyExtractor={(item) => item.id}
        renderItem={renderSocialMediaItem}
      />
    </View>
  );
};

export default Profile;
