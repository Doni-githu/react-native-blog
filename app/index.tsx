import { Redirect } from "expo-router"
import { useContext } from "react"
import { AuthContext } from '../context/user'
import { IAuthContextValue } from "../interfaces/reducer.props"

const StartPage = () => {
  return <Redirect href={'/login'} />
}



export default StartPage