import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

// componentes del proyecto
import RegistroUsuario from './RegistroUsuario';
import VehiculosDisponibles from './VehiculosDisponibles';
import Renta from './Renta';

const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <Tab.Navigator
            initialRouteName='RegistroUsuario'
            screenOptions={{
                tabBarActiveTintColor: 'green',
                tabBarActiveBackgroundColor: 'yellow',
                tabBarInactiveTintColor: 'black',
                headerShown: false
            }
            }
        >
            <Tab.Screen name='RegistroUsuario' component={RegistroUsuario} options={{

                title: 'Registro_Usuario', tabBarIcon: ({ color, size }) => (
                    <Ionicons name='people' color={color} size={30} />
                )
            }}
            />

            <Tab.Screen name='VehiculoDisponible' component={VehiculosDisponibles} options={{

                title: 'Vehiculo_Disponible', tabBarIcon: ({ color, size }) => (
                    <Ionicons name='car' color={color} size={30} />
                )
            }}
            />

            <Tab.Screen name='Renta' component={Renta} options={{

                title: 'Renta_Vehiculo', tabBarIcon: ({ color, size }) => (
                    <Ionicons name='rent' color={color} size={30} />
                )
            }}
            />

        </Tab.Navigator>
    )
}

export default Home