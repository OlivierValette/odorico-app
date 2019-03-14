import React, {Component} from 'react';
import { View, Text } from 'react-native';
import Colors from '../constants/Colors';

class EventListScreen extends Component {

    static navigationOptions = {
        title: 'Events list',
        headerStyle: {
            backgroundColor: Colors.alert,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            flexGrow: 1,
        },
    };

    render() {
        return (
            <View>
                <Text style={{ fontSize: 18, color: Colors.secondary, paddingBottom: 10,}}>Events list screen</Text>
            </View>
        );
    }
}

export default EventListScreen;