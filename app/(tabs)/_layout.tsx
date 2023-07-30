import { Tabs, useFocusEffect } from "expo-router"
import { useEffect } from "react"
export default function () {
    useFocusEffect(() => {
        console.log('render')
    })
    return (
        <Tabs>
            <Tabs.Screen name="home" options={{ headerTitleAlign: 'center' }} />
            <Tabs.Screen name="list" options={{ headerTitleAlign: 'center' }} />
        </Tabs>
    )
}