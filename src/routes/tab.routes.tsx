import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialICons from 'react-native-vector-icons/MaterialIcons';

import AuthContext from '../context/auth';

import PlantSelect from '../pages/PlantSelect';
import MyPlants from '../pages/MyPlants';

import colors from '../styles/colors';

const BottomTab = createBottomTabNavigator();

export default function TabRoutes() {
  const {plants} = useContext(AuthContext);
  const hasStoragedPlants = plants;

  return (
    <BottomTab.Navigator
      initialRouteName={hasStoragedPlants ? 'Minhas Plantas' : 'Nova Planta'}
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.heading,
        labelPosition: 'beside-icon',
      }}>
      <BottomTab.Screen
        name={'Nova Planta'}
        component={PlantSelect}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialICons
              name={'add-circle-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <BottomTab.Screen
        name={'Minhas Plantas'}
        component={MyPlants}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialICons
              name={'format-list-bulleted'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
