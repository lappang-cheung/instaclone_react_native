import React, { Component } from 'react';
import { 
    View,
    Text
} from 'react-native';

import InstaCloneStyles from '../../../styles/src/InstaCloneStyles';
import {PostFeed} from '../../components/container';


class InstaClone extends Component {

    render() {

        return (
            <View style={InstaCloneStyles.container}>
                {/* <View style={InstaCloneStyles.header}>
                    <Text>Instagram</Text>
                </View> */}
                <PostFeed />
            </View>
        );
    };
};

export default InstaClone;