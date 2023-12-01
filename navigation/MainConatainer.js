import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Instructionscreen from './screens/Instructionscreen'
import Emulatorscreen from './screens/Emulatorscreen'

const emulatorName = 'Emulator'
const instructionName = 'Instruction'
const Tab = createBottomTabNavigator()

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={emulatorName} // which screen appears first
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName
                        let routeName = route.name
                        if (routeName === emulatorName) {
                            iconName = focused ? 'settings' : 'settings-outline'
                        } else if (routeName === instructionName) {
                            iconName = focused ? 'library' : 'library-outline'
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    }, 
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    tabBarLabelStyle: {paddingBottom: 10, fontSize: 12},
                    tabBarStyle: {padding: 10, height: 70},
                    tabBarItemStyle: {flexDirection: 'column'},
                    })}>
    
            <Tab.Screen name={emulatorName} component={Emulatorscreen} options={{headerShown: false}}/>
            <Tab.Screen name={instructionName} component={Instructionscreen} options={{headerShown: false}}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}
