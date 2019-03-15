import React, {Component} from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import * as mime from 'react-native-mime-types';
import Colors from '../constants/Colors';

const initialState = {
    title: '',
    description: '',
    image: null,
    lat: null,
    lng: null,
};

class SpotAddScreen extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
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
        if(status === 'granted') {
            const result = await ImagePicker.launchImageLibraryAsync();
            console.log(result);
            if (!result.cancelled) {
                this.setState({ image: result });
            }
        }
    }

    handleSubmit() {
        const data = new FormData();
        data.append('title', this.state.title);
        data.append('address', this.state.address);
        data.append('description', this.state.description);
        data.append('image', {
            uri: this.state.image.uri,
            name: this.state.image.uri.replace(/^.*[\\\/]/, ''),
            type: mime.lookup(this.state.image.uri),
        });
        data.append('lat', this.state.lat);
        data.append('lng', this.state.lng);

        this.props.addSpot(data, () => {
            this.setState( initialState);
            this.props.navigation.navigate('SpotList');
        });
    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 18, color: Colors.secondary, paddingBottom: 10,}}>Odorico add screen</Text>
                <TextInput
                    value={this.props.title}
                    placeholder='Titre'
                    onChangeText={text => this.setState({title: text} )}
                />
                <TextInput
                    value={this.props.address}
                    placeholder='Adresse'
                    onChangeText={text => this.setState({address: text} )}
                />
                <TextInput
                    value={this.props.description}
                    placeholder='Description'
                    onChangeText={text => this.setState({description: text} )}
                />
                <Button
                    title='Choisir une photo'
                    color={Colors.primary}
                    onPress={ () => this.handleImage() }
                />
                <TextInput
                    value={this.props.lat}
                    placeholder='Latitude'
                    onChangeText={text => this.setState({lat: text} )}
                />
                <TextInput
                    value={this.props.lng}
                    placeholder='Longitude'
                    onChangeText={text => this.setState({lng: text} )}
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