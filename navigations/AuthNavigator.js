import React from 'react';
import { createStackNavigator } from 'react-navigation';

import LoginContainer from '../containers/LoginContainer';
import Signupontainer from '../containers/SignupContainer';

export default createStackNavigator({
    Login: LoginContainer,
    Signup: Signupontainer,
});