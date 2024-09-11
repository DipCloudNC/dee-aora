import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";

const Create = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          className="w-full flex justify-center h-full px-4"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Text className="text-2xl font-semibold text-white font-psemibold">
            Create Your Posts...
          </Text>

          <FormField title="Post Title" otherStyles="mt-5" />

          <FormField
            title="AI Prompt"
            otherStyles="mt-7"
            keyboardType="prompt"
          />
          <View className="my-6">
            <Text className="text-base text-gray-100 font-pmedium">
              Result:
            </Text>
            <View className="w-full h-48 mt-2 p-4 bg-black-100 rounded-2xl ">
              <Text className="text-gray-400">
                Image result will be displayed here..
              </Text>
            </View>
          </View>

          <CustomButton title="Create Post" containerStyles="" />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Create;
