import React, {Component} from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import Colors from '../constants/Colors';

class SpotAddScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            image: null,
            lat: null,
            lng: null,
        }
    }

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

    async handleImage() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status === 'granted') {
            let result = await ImagePicker.launchImageLibraryAsync();
            if (!result.cancelled) {
                this.setState({image: result});
            }
        }
    }

    handleSubmit() {
        const data = new FormData();
        data.append('picture', {
            uri: result.uri,
            name: 'test.jpg',
            type: 'image/jpg'
        });
        this.props.addSpot();
    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 18, color: Colors.secondary, paddingBottom: 10,}}>Odorico add screen</Text>
                <TextInput
                    value={this.props.title}
                    placeholder='Titre'
                    onChange={text => this.setState({title: text} )}
                />
                <TextInput
                    value={this.props.address}
                    placeholder='Adresse'
                    onChange={text => this.setState({address: text} )}
                />
                <TextInput
                    value={this.props.description}
                    placeholder='Description'
                    onChange={text => this.setState({description: text} )}
                />
                <Button
                    title='Choisir une photo'
                    color={Colors.primary}
                    onPress={() => this.handleImage()}
                />
                <TextInput
                    value={this.props.lat}
                    placeholder='Latitude'
                    onChange={text => this.setState({lat: text} )}
                />
                <TextInput
                    value={this.props.lng}
                    placeholder='Longitude'
                    onChange={text => this.setState({lng: text} )}
                />
                <Button
                    title='Valider'
                    color={Colors.alert}
                    onPress={() => this.handleSubmit()}
                />
            </View>
        );
    }
}

export default SpotAddScreen;