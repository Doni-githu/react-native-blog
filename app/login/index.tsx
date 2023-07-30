import { Button, StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Tabs } from 'expo-router'
import { TextInput } from "react-native"
import { StatusBar } from 'expo-status-bar'
import Input from '../../uiComponents/Input/Input'
const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      alignSelf: 'center'
    }}>
      <StatusBar />
      <Tabs.Screen options={{ headerTitle: 'Login', tabBarLabel: 'Login' }} />
      <View>
        <Text style={styles.title}>Login</Text>
        <View style={styles.form}>
          <Input placeholder='Email' value={email} setState={setEmail} />
          <Input placeholder='Password' value={password} secureTextEntry setState={setPassword} />


          <View>
            <Pressable style={({ pressed }) => [{
              backgroundColor: pressed ? 'rgba(0, 0, 0, 0.5)' : 'black',
              ...styles.button,
            },
            ]}>
              <Text style={styles.text}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  form: {
    flexDirection: 'column',
    gap: 12,
    padding: 20,
    width: 300
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10
  }
})