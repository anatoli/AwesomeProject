import React, { Component } from 'react';
var ReactN = require('react-native');
var {
    Text,
    TextInput,
    View,
    Button
} = ReactN;

import { myRestApi } from './APIModule'

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            response: 'This test text',
            text:'New text TEST'
        };


    }
    _handleButtonPress = () => {
        myRestApi.getNote();
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>

                <Button title="Rest" onPress={()=> this._handleButtonPress() } />
                <Text>
                    {this.state.response}
                </Text>
            </View>


        );
    }
}