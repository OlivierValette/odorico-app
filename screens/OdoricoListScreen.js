import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Colors from '../constants/Colors';

class OdoricoListScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: "Odorico spot add",
            headerRight: (<Button title="Add spot" onPress={() => navigation.navigate('OdoricoAddScreen')} />),
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
                <Text style={{ fontSize: 18, color: Colors.secondary, paddingBottom: 10,}}>Odorico list screen</Text>
            </View>
        );
    }
}

export default OdoricoListScreen;