import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./pages/home/index"
import Detail from "./pages/detail/index"
import { Feather } from '@expo/vector-icons'
import {TouchableOpacity} from 'react-native'

const Stack = createNativeStackNavigator()

function Router(){
    return(
        
        <NavigationContainer>
            <Stack.Navigator>
                <>
                <Stack.Screen 
                 name="Home"
                 component={Home}
                 options={{headerShown: false}}
                />
            <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
                headerRight: ()=>(
                    <TouchableOpacity>
                        <Feather
                        name='shopping-cart'
                        size={25}
                        color='black'
                        />
                    </TouchableOpacity>
                )
            }}
            />
            </>
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}
export default Router