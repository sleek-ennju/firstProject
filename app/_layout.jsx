import { Stack } from "expo-router";
import "../global.css"
import { 
  useFonts, 
  Poppins_200ExtraLight, 
  Poppins_300Light, 
  Poppins_400Regular, 
  Poppins_500Medium, 
  Poppins_600SemiBold, 
  Poppins_700Bold, 
  Poppins_800ExtraBold, 
  Poppins_900Black 
} from "@expo-google-fonts/poppins";


export default function RootLayout() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="index"  />
      <Stack.Screen name="details"  />
    </Stack>
  );
}
