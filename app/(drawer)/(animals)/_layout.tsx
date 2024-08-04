import { Stack, Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
       name="animals"
        options={{
          title: "animals",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
            name={focused ? "rainy" : "rainy-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="relocations"
        options={{
          title: "relocations",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
            name={focused ? "location" : "location-outline"}
              color={color}
              />
          ),
        }}
      />
       <Tabs.Screen
        name="create_animals"
        options={{
         href:null
        }}
      />
    </Tabs>
   
  );
}
