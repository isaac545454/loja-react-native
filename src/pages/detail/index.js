import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Dot from '../../components/circles'
import ButtonScroll from '../../components/scroll'
import Button from '../../components/Button'
import Footer from '../../components/footer'

 export default function Detail({navigation}){
    navigation.setOptions({
        headerTitle: 'NIKE'
    })
    return (
      <ScrollView style={styled.container}>
        <Image 
        source={require('../../assets/detail.png')}
        style={styled.Image}
        resizeMode='cover'
        />
        <View>
            <View>
                <Text style={[styled.title, {fontSize: 24}]}>R$ 280,90</Text>
            </View>    
             <View opacity={0.4}>
                <Text style={[styled.title, {fontSize: 30}]}>Nike Epic React Flyknit  </Text>
            </View>

            <View style={styled.dorContainer}>
                    <Dot color='#34e235' />
                    <Dot color='#345333' />
                    <Dot color='#333' />
                    <Dot color='black' />
            </View>

            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                    <ButtonScroll bColor='black' color='#fff'>42</ButtonScroll>
                    <ButtonScroll >41</ButtonScroll>
                    <ButtonScroll >40</ButtonScroll>
                    <ButtonScroll >39</ButtonScroll>
                    <ButtonScroll >38</ButtonScroll>

                </ScrollView>
            </View>

            <View style={styled.TextContent}>
                    <Text style={styled.TextTitle}>
                        Nike Epic React Flyknit  
                    </Text>
                    <Text style={styled.TextContent}>
                        O brilho perdura no Nike Air Force 1 '07, o tênis original do basquete que dá um 
                        toque de inovação naquilo que você conhece bem: sobreposições costuradas e duráveis,
                         acabamentos simples e a quantidade perfeita de brilho para fazer você se destacar.
                    </Text>
                    <Text style={styled.textList}>
                         - categoria: Amortecimento
                    </Text>
                    <Text style={styled.textList}>
                         - Material: Mesh
                    </Text>
            </View>

            <Button />
            <View style={styled.line} />
            <Footer />
        </View >
      </ScrollView>
    );
  
}

const styled = StyleSheet.create({
     container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
     },
     Image: {
        width: '100%'
     },
     title: {
        fontFamily: 'Anton_400Regular',
        paddingHorizontal: '2%' ,
     },
     dorContainer:{
        flexDirection: 'row',
        marginVertical: '5%'
     },
     TextContent: {
        fontSize: 16,
        lineHeight: 25,
        marginVertical: "2%",
        paddingHorizontal: '2%',
     },
     TextTitle: {
        fontSize: 22,
        marginVertical: '2%'
     
     },
     textList: {
        fontSize: 16,
        lineHeight: 25
     },
     line: {
        borderWidth: 1,
        boderBottomColor: "#ddd",
        marginVertical: '2%'
     }
})

