import { View, Text, FlatList } from "react-native";
import React from "react";

const Trending = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      horizontal
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <View>
          <Text className="text-3xl text-white ">{item.id}</Text>
        </View>
      )}
    />
  );
};

export default Trending;
