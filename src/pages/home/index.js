
import { Text, View ,StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React  from 'react'
import {MaterialIcons} from '@expo/vector-icons'
import Shoes from '../../components/tenis'
import {useNavigation} from '@react-navigation/native'

export default function Home(){

    const Navigator = useNavigation()
  
    return (
        <View style={styled.container}>
            <View style={styled.header}>
                <Image 
                source={require('../../assets/banner.png')}
                style={styled.image}
                />
                <View style={styled.textContainer}>
                    <Text style={styled.text}>TÊNIS</Text>
                    <Text style={[styled.text, {color: '#cececf'}]} >-</Text>
                    <Text style={[styled.text, {color: '#cececf'}]} >MASCULINOS</Text>
                    <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
                        <MaterialIcons 
                        name="filter-list"
                        size={24}
                        color="#000"
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styled.line} />


            <ScrollView>
                <Text style={styled.text}>lançamentos</Text>

                <View style={{flexDirection: "row", justifyContent: 'space-around'}}>
                    <Shoes img={require('../../assets/1.png')} cost="R$190,00" onClick={()=> Navigator.navigate('Detail')}>
                        Nike Air Max Dia    
                     </Shoes>
                     <Shoes img={require('../../assets/2.png')} cost="R$290,00" onClick={()=>Navigator.navigate('Detail')}>
                        Nike Downshifter 10  
                     </Shoes>   
                </View>

                <View style={{flexDirection: "row", justifyContent: 'space-around'}}>
                    <Shoes img={require('../../assets/4.png')} cost="R$490,00" onClick={()=>Navigator.navigate('Detail')}>
                        Nike Epic React Flyknit  2
                     </Shoes>
                     <Shoes img={require('../../assets/3.png')} cost="R$190,00" onClick={()=> Navigator.navigate('Detail')}>
                        Nike Squidward tantacles
                     </Shoes>
                </View>

                <View style={{flexDirection: "row", justifyContent: 'space-around'}}>
                    <Shoes img={require('../../assets/5.png')} cost="R$790,00" onClick={()=> Navigator.navigate('Detail')}>
                        Nike Epic React Flyknit  
                     </Shoes>
                     <Shoes img={require('../../assets/6.png')} cost="R$770,00" onClick={()=>Navigator.navigate('Detail')}>
                        Nike 
                     </Shoes>
                   
                </View>


            </ScrollView>

      </View>
    );
  }
const styled = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        backgroundColor: "#fff"
    },
    header: {
        marginBottom: 8
    },
    image: {
        width: '100%'
    }, 
    textContainer: {
        flexDirection: 'row',
        marginVertical: "5%",
        marginHorizontal: "5%"
    },
    text:{
        fontFamily: "Anton_400Regular",
        fontSize: 26,
        marginHorizontal: '1%'
    },
    line: {
        borderBottomColor: '#d8d8d8',
        borderBottomWidth: 2
    }

})





