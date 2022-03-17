import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home"
import UsersGet from '../screens/UsersGet';
import UsersPost from '../screens/UsersPost';
import Login from '../screens/Login';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Navigation = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createMaterialBottomTabNavigator();

    function MyTabs() {
        return (
          <Tab.Navigator
            initialRouteName="Home"
            activeColor="#e91e63"
            barStyle={{ backgroundColor: "white" }}
          >
            <Tab.Screen
              name="home"
              component={Home}
              
              options={{
                tabBarLabel: "Home",
                
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ), 
              }} 
            />
            <Tab.Screen
              name="Get"
              component={UsersGet}
              options={{
                tabBarLabel: "Get",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="glasses" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Post"
              component={UsersPost}
              options={{
                tabBarLabel: "Post",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="door" color={color} size={26} />
                ),
              }}
            />
          </Tab.Navigator>
        );
      }





  return (
    <>
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

      <Stack.Screen name="home" component={MyTabs} options={{headerShown:false}}/>
        



        {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="get" component={UsersGet} /> */}
        {/* <Stack.Screen name="post" component={UsersPost} /> */}

        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default Navigation

const styles = StyleSheet.create({})