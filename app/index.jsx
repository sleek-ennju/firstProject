import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-poppins font-p-extra-bold">Hello World.</Text>
      <Link href="/home" className="underline text-red-500 font-poppins font-p-bold">Navigate to details</Link>
    </View>
  );
}
