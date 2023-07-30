import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from "expo-router"
const SettingsPage = () => {
    return (
        <View>
            <Stack.Screen options={{headerTitle: 'Settings page'}}/>
            <Text> SettingsPage</Text>
        </View>
    )
}

export default SettingsPage

const styles = StyleSheet.create({})