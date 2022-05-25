import React from "react"
import { View, Text, Button } from "react-native"
import { useNavigation } from "@react-navigation/native"
const Home = () => {
  const navigation = useNavigation()
  function irSobre() {
    navigation.navigate("Sobre")
  }
  return (
    <View>
      <Text>Página Home</Text>

      <Button title="Ir para Sobre" onPress={irSobre} />
    </View>
  )
}
export default Home
