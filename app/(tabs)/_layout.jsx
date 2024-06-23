
import { View, Text } from 'react-native';
import { Tabs } from "expo-router";
import { AntDesign, Ionicons, FontAwesome6 } from '@expo/vector-icons';
// import Ionicons from '@expo/vector-icons/Ionicons';

const _TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{headerShown: false}}>
        <Tabs.Screen name='home' options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          )
        }} />   
        <Tabs.Screen name='bookmark' options={{
          title: 'Bookmark',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="bookmark" color={color} size={size} />
          )
        }} />   
        <Tabs.Screen name='create' options={{
          title: 'Create',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="create" color={color} size={size} />
          )
        }} />   
        <Tabs.Screen name='profile' options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="profile" color={color} size={size} />
          )
        }} />   
      </Tabs>
    </>
  )
}

export default _TabsLayout