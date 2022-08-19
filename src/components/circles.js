import { Text, View, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

export default function circles(props){

    return (
      <View style={[styled.container, {backgroundColor: props.color}]}>
        
      </View>
    )
  }

  const styled = StyleSheet.create({
      container: {
        width: Dimensions.get('window').width * 0.070,
        height: Dimensions.get('window').width * 0.070,
        borderRadius: Dimensions.get('window').width * 0.070 / 2,
        marginHorizontal: '2.5%',
        elevation: 5
      }     
  })