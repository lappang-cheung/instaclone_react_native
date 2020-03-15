import React, { Component } from 'react';

import {MainFeed, Login} from './components/screens';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

const MainStack = createSwitchNavigator({
    login: {screen: Login},
    main: {screen: MainFeed}
});

const AppContainer = createAppContainer(MainStack);

class InstaClone extends Component {
    render() {
        return <AppContainer />
    }
}

export default (InstaClone);