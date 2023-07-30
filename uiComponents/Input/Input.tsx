import { TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { IInputProps } from '../../interfaces/input.props.interface'

const Input = (args: IInputProps) => {
    return (
        <TextInput {...args} placeholder={args.placeholder} onChangeText={(value) => args.setState(value)} value={args.value} style={styles.input} />
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 10,
    }
})

export default Input