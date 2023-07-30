import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Tabs } from 'expo-router'

const Register = () => {
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    
    
    return (
        <View>
            <Tabs.Screen options={{headerTitle: 'Register', tabBarLabel: 'Register'}} />
            <Text>Register</Text>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({})