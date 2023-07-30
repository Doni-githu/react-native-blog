import { TextInputProps } from "react-native";

export interface IInputProps extends TextInputProps {
    setState: Function,
    value: string,
    placeholder: string
}