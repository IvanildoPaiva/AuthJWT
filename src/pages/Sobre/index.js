import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function Home() {
  const navigation = useNavigation()

  return (
    <View>
      <Text>Página Sobre</Text>
      <Button title="Voltar para Home" onPress={() => navigation.goBack()} />
    </View>
  )
}
