import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Stack, useSearchParams } from "expo-router"
const ListDetail: FC = () => {
    const { id } = useSearchParams()
    return (
        <View>
            <Stack.Screen options={{ headerTitle: `Details #${id}` }} />
            <Text>You have read this {id} news</Text>
        </View>
    )
}

export default ListDetail

const styles = StyleSheet.create({})