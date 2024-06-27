import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text style={{ color: color }}>
        {name}
      </Text>
    </View>
  );
}
const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#adb0c9',
          tabBarStyle: {
            backgroundColor: '#e8e1eb',
            borderTopWidth: 1,
            borderTopColor: '#e8e1eb',
            height: 84,
          }
        }}
      >
        <Tabs.Screen 
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }}
        />

        <Tabs.Screen 
          name="activity"
          options={{
            title: 'Activity',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bell}
                color={color}
                name="Activity"
                focused={focused}
              />
            )
          }}
        />

        <Tabs.Screen 
          name="account"
          options={{
            title: 'Account',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Account"
                focused={focused}
              />
            )
          }}
        />

      </Tabs>
    </>
  )
}

export default TabsLayout