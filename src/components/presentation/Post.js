import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import InstaCloneStyles from '../../../styles/src/InstaCloneStyles';
import config from '../../config';

class Post extends Component {

    state = {
        liked: false,
        screenWidth: Dimensions.get("window").width,
        screenHeight: Dimensions.get("window").width * 1.1
    };

    likeToggle = () => {
        this.setState({
            liked: !this.state.liked
        })
    };

    render() {

        const imageURI = "https://lh3.googleusercontent.com/B0yejmZNJ6g5eRqB77sjSXjhGRtSEw8jXbfYM9WCC8vQ7tvnj4XDbiQ62sq7qQueQ9cyFYsePrT_mKaGo0-EuDOM" 
        + "=s" + this.state.screenWidth + "-c";

        const heartIconColour = this.state.liked ? "rgb(252, 61, 57)" : null;

        return (
            <View>
                <View style={InstaCloneStyles.userBar}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image
                            style={ InstaCloneStyles.userPic}
                            source={{
                                uri: "https://lh3.googleusercontent.com/GYFKxKWMy95t-DeoFvBJdXEDK5Dku7GHH5A8UkzDQf4KzvVTATElxdNm-R_mgGjr6eHgKi49Yhk7D6HzA3GKlNPn"
                            }}
                        />
                        <Text style={{marginLeft: 10}}>TestUser123</Text>
                    </View>
                    <View style={{alignItems: "center"}}>
                        <Text style={{fontSize: 30}}>...</Text>
                    </View>
                </View>
                <TouchableOpacity 
                    onPress={this.likeToggle}
                    activeOpacity={0.8}
                >
                    <Image
                        style={{ width: this.state.screenWidth, height: this.state.screenHeight }} 
                        source={{                
                            uri: imageURI
                        }} 
                    />
                </TouchableOpacity>
                <View style={InstaCloneStyles.iconBar}>
                    <Image 
                        style={[InstaCloneStyles.icon, {height: 45, width: 45, tintColor: heartIconColour}]} 
                        source={config.images.heartIcon} />
                    <Image 
                        style={[InstaCloneStyles.icon, {height: 36, width: 36}]} 
                        source={config.images.bubbleIcon} />
                    <Image 
                        resizeMode="stretch"
                        style={[InstaCloneStyles.icon, {height: 50, width: 40}]} 
                        source={config.images.arrowIcon} />
                </View>
                <View style={InstaCloneStyles.iconBar}>
                    <Image 
                        style={[InstaCloneStyles.icon, {height: 35, width: 35}]} 
                        source={config.images.heartIcon} 
                    />
                    <Text>128 Likes</Text>
                </View>
            </View>
        );
    };
};

export default Post;