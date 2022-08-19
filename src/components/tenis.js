import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default function tenis (props) {

    function filter(desc){
        if(desc.length < 15){
            return desc
        }

        return `${desc.substring(0, 19)}...`
        
    }

    return (
      <TouchableOpacity style={styled.container} onPress={props.onClick}>
        <Image 
            source={props.img}
            style={styled.shoesImg}
        />
        <Text style={styled.ShoesText}>
            {filter(props.children)}
        </Text>
        <View opacity={0.4} >
         <Text style={styled.ShoesText}>
            {props.cost}
        </Text>
        </View>
      </TouchableOpacity>
    )
  }

const styled  = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shoesImg: {
        width: 170,
        height: 170
    },
    ShoesText: {
        fontSize: 16
    }
})