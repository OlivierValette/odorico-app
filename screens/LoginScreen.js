import React, {Component} from 'react';
import { Button, Text, View } from "react-native";


class LoginScreen extends Component {
    render() {
        return (
            <View>
                <Text>Login screen</Text>
                <Button title='Login' onPress={() => this.props.navigation.navigate('Main')}/>
                <Button title='Sign Up' onPress={() => this.props.navigation.navigate('Signup')}/>
            </View>
        );
    }
}

export default LoginScreen;