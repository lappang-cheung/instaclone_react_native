import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import LoginStyles from '../../../styles/components/screens/LoginStyles';

class Login extends Component {

    login = () => {
        // Navigate next page
        this.props.navigation.navigate('MainFeed')
    }

    render() {
        return (
            <TouchableOpacity 
                style={LoginStyles.container}
                onPress={this.login}
            >
                <Text>Login Page</Text>
            </TouchableOpacity>
        );
    };
};

export default Login;