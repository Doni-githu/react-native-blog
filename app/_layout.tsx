import { Stack } from "expo-router"
import { AuthReducer } from "../context/user"
import { BlogReducer } from "../context/blog"
const StackLayout = () => {
    return (
        <AuthReducer>
            <BlogReducer>
                <Stack>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen name="login" options={{ headerShown: false }} />
                    <Stack.Screen name="404" options={{ headerShown: false }} />
                </Stack>
            </BlogReducer>
        </AuthReducer>
    )
}

export default StackLayout