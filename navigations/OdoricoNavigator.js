import React from 'react';
import { createStackNavigator } from 'react-navigation';

import OdoricoListScreen from '../screens/OdoricoListScreen';
import OdoricoAddScreen from '../screens/OdoricoAddScreen';

export default createStackNavigator({
    OdoricoList: OdoricoListScreen,
    OdoricoAdd: OdoricoAddScreen,
});
