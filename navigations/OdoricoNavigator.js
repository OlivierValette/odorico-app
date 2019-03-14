import React from 'react';
import { createStackNavigator } from 'react-navigation';

import spotListContainer from '../containers/spotListContainer';
import SpotAddScreen from '../screens/SpotAddScreen';

export default createStackNavigator({
    SpotList: spotListContainer,
    SpotAdd: SpotAddScreen,
});
