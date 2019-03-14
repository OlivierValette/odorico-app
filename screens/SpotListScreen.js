import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Colors from '../constants/Colors';

class SpotListScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: "Odorico spots list",
            headerRight: (<Button title="Add spot" onPress={() => navigation.navigate('SpotAdd')} />),
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

        console.log(this.props.spots);

        return (
            <View>
                <Text style={{ fontSize: 18, color: Colors.secondary, paddingBottom: 10,}}>Spots list screen</Text>
            </View>
        );
    }
}

export default SpotListScreen;