import React from 'react';
import { createStackNavigator } from 'react-navigation';

import spotListContainer from '../containers/spotListContainer';
import SpotAddContainer from '../containers/spotAddContainer';

export default createStackNavigator({
    SpotList: spotListContainer,
    SpotAdd: SpotAddContainer,
});
