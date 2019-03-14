import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import Colors from '../constants/Colors';

// Import navigators
import OdoricoNavigator from './OdoricoNavigator';

// Import screens
import EventListScreen from '../screens/EventListScreen';
import ProfileScreen from '../screens/ProfileScreen';

const tabBarDefaultOptions = {
    activeTintColor: 'white',
    activeBackgroundColor: Colors.primary,
    inactiveTintColor: Colors.secondary,
    inactiveBackgroundColor: 'white',
    labelStyle: {
        fontSize: 14,
    },
};

export default createBottomTabNavigator( {
    Odorico: {
        screen: OdoricoNavigator,
        navigationOptions: {
            title: 'Odorico spots',
            tabBarIcon: ({tintColor}) => (
                <TabBarIcon
                    name={Platform.OS === 'ios' ? 'ios-keypad' : 'md-keypad'}
                    color={tintColor}
                />
            ),
            tabBarOptions: tabBarDefaultOptions,
        },
    },
    Events: {
        screen: EventListScreen,
        navigationOptions: {
            title: 'Odorico events list',
            tabBarIcon: ({tintColor}) => (
                <TabBarIcon
                    name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'}
                    color={tintColor}
                />
            ),
            tabBarOptions: tabBarDefaultOptions,
        },
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({tintColor}) => (
                <TabBarIcon
                    name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
                    color={tintColor}
                />
            ),
            tabBarOptions: tabBarDefaultOptions,
        },
    },
});
