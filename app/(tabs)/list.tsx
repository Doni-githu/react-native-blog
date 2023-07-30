import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from "expo-router"

const List = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20
        }}>
            <Link href="/list/1">First news</Link>
            <Link href="/list/2">Second news</Link>
            <Link href="/list/3">Third news</Link>
        </View>
    )
}

export default List

const styles = StyleSheet.create({})