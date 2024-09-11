import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Share,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const bookmarkData = [
  {
    id: "1",
    username: "Chaudhary",
    userAvatar:
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    image:
      "https://images.pexels.com/photos/4750098/pexels-photo-4750098.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Scenic Mountain View",
    description: "A breathtaking view of snow-capped mountains at sunrise.",
    likes: 234,
    comments: 56,
  },
  {
    id: "2",
    username: "Sharma",
    userAvatar:
      "https://images.pexels.com/photos/761115/pexels-photo-761115.jpeg?auto=compress&cs=tinysrgb&w=600",
    image:
      "https://images.pexels.com/photos/1002525/pexels-photo-1002525.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Tropical Beach Paradise",
    description:
      "Crystal clear waters and white sandy beaches of a tropical island.",
    likes: 456,
    comments: 89,
  },
  {
    id: "3",
    username: "Patel",
    userAvatar:
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image:
      "https://images.pexels.com/photos/1209978/pexels-photo-1209978.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Urban Cityscape",
    description:
      "A stunning night view of a modern city skyline with glowing lights.",
    likes: 789,
    comments: 123,
  },
];

const BookmarkItem = ({ item }) => {
  // Function to handle sharing
  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out this amazing bookmark!\n\nTitle: ${item.title}\nDescription: ${item.description}\nImage: ${item.image}`,
      });
    } catch (error) {
      console.error("Error sharing: ", error.message);
    }
  };

  return (
    <View style={{ marginTop: 48 }}>
      <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{ uri: item.userAvatar }}
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
              }}
            />
            <Text
              style={{
                marginLeft: 12,
                fontWeight: "bold",
                color: "#ffffff",
                fontSize: 18,
              }}
            >
              {item.username}
            </Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="ellipsis-horizontal" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ position: "relative" }}>
        <Image
          source={{ uri: item.image }}
          style={{ width: "100%", height: 208, resizeMode: "cover" }}
        />
        <View
          style={{
            position: "absolute",
            top: 8,
            right: 16,
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: 24,
            padding: 8,
          }}
        >
          <Ionicons name="heart" size={24} color="red" />
        </View>
      </View>

      <View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 8,
            color: "#ffffff",
          }}
        >
          {item.title}
        </Text>
        <Text style={{ marginBottom: 16, color: "#e5e7eb", lineHeight: 24 }}>
          {item.description}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 8,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 24,
              }}
            >
              <Ionicons name="heart" size={24} color="red" />
              <Text
                style={{ marginLeft: 8, color: "#ffffff", fontWeight: "600" }}
              >
                {item.likes}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 24,
              }}
            >
              <Ionicons name="chatbubble-outline" size={24} color="white" />
              <Text
                style={{ marginLeft: 8, color: "#ffffff", fontWeight: "600" }}
              >
                {item.comments}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{ backgroundColor: "#3b82f6", borderRadius: 24, padding: 8 }}
            onPress={handleShare}
          >
            <Ionicons name="share-social-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Bookmark = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#1f2937" }}>
      <FlatList
        data={bookmarkData}
        renderItem={({ item }) => <BookmarkItem item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Bookmark;
