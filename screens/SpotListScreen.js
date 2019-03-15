import React, {Component} from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

class SpotListScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: "Odorico spots list",
            headerRight: (
                <Button
                    color={Colors.primary}
                    title="Add spot"
                    onPress={() => navigation.navigate('SpotAdd')}
                />),
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
            <View style={styles.container}>
                <FlatList
                    data={this.props.spots}
                    keyExtractor={ (item, index) => item._id }
                    renderItem={ ({item}) => <Text style={styles.item}>{item.title}</Text> }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default SpotListScreen;