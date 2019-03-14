import React, {Component} from 'react';
import { View, Text } from 'react-native';
import Colors from '../constants/Colors';

class SpotAddScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: "Odorico spot add",
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
    };

    render() {
        return (
            <View>
                <Text style={{ fontSize: 18, color: Colors.secondary, paddingBottom: 10,}}>Odorico add screen</Text>
            </View>
        );
    }
}

export default SpotAddScreen;