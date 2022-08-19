import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default function scroll (props){
    return (
      <View style={[styled.container, { backgroundColor: props.bColor || '#FFF'}]}>
            <Text style={styled.text, {color: props.color || "#000"}}>
                {props.children}
            </Text>
      </View>
    )
  }

  const styled = StyleSheet.create({
    container:{
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: '#e6e6e6',
        borderWidth: 3,
        marginHorizontal: 10
    },
    text: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
  })
