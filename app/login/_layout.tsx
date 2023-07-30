import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"
export default function () {
    return (
        <Tabs screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size }) => {
                let iconName: string | undefined;
                if (route.name === 'index') {
                    return <Ionicons name={!focused ? 'person-outline' : 'person'} size={size} color={'white'} />;
                } else if (route.name === 'register') {
                    return <Ionicons name={!focused ? 'person-add-outline' : 'person-add'} size={size} color={'white'} />;
                }
            },
            tabBarLabelStyle: {
                color: 'white',
            },
            tabBarStyle: {
                backgroundColor: 'black'
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
                color: 'white'
            },
            headerStyle: {
                backgroundColor: 'black'
            },
        })}>
            <Tabs.Screen name="index" />
            <Tabs.Screen name="register" />
        </Tabs>
    )
}