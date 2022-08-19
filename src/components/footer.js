import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Shoes from './tenis'

export default function footer() {
  return (
    <View style={styled.container}>
      <Text style={styled.title}>VOCÊ TANBEM PODE GOSTAR</Text>
      <View style={{flexDirection: 'row'}}> 
           <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                <View style={{marginHorizontal: 10}}>
                    <Shoes img={require('../assets/1.png')} cost="R$790,00" >
                        Nike Epic React Flyknit  
                     </Shoes>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Shoes img={require('../assets/3.png')} cost="R$190,00" >
                       Nike Squidward tantacles  
                     </Shoes>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Shoes img={require('../assets/4.png')} cost="R$490,00" >
                         Nike Epic React Flyknit  2
                     </Shoes>
                </View>


           </ScrollView>
        </View>
    </View>
  )
}

const styled = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%'
    }
})