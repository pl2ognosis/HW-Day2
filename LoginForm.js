import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import TitledInput from './TitledInput';
import firebase from './firebase';

export default class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };
    onLoginPress() {
        this.setState({ error: '', loading: true });

        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { this.setState({ error: '', loading: false }); })
            .catch(() => {
                //Login was not successful, let's create a new account
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => { this.setState({ error: '', loading: false }); })
                    .catch(() => {
                        this.setState({ error: 'Invalid Email or Password', loading: false });
                    });
            });
    }
    renderButtonOrSpinner() {
        if (this.state.loading) {
            return null;    
        }
        return <Button onPress={this.onLoginPress.bind(this)} title="ENTER" />;
    }

    render() {
        return (
            <View>
                    <TitledInput 
                        label='Email Address'
                        placeholder='example@email.com'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                    <TitledInput 
                        label='Password'
                        autoCorrect={false}
                        placeholder='*******'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                    <Text>{this.state.error}</Text> 
                    {this.renderButtonOrSpinner()}
            </View>
        );
    }
}


