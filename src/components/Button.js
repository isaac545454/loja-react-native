import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button() {
  return (
    <View style={styled.container}>
     <TouchableOpacity style={styled.btnContainer}>
      <Text style={styled.title}>COMPRAR</Text>
     </TouchableOpacity>
    </View>
  )
}

const styled = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainer: {
        width: '90%',
        height: 50,
        backgroundColor: '#17181a',
        borderRadius: 5,
        marginVertical:  '5%',
         alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: "white",
        fontSize: 17
    }
})