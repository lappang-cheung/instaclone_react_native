import { StyleSheet } from 'react-native';
import config from '../../src/config';

const InstaCloneStyles = StyleSheet.create({
    container: {
        flex: 1, 
        width: 100 + "%", 
        height: 100 + "%"
    },
    header: {
        width: 100 + "%", 
        height: 56,
        marginTop: 30,
        backgroundColor: "rgb(250, 250, 250)",
        borderBottomColor: "rgb(233, 233, 233)",
        borderBottomWidth: StyleSheet.hairlineWidth,

        justifyContent: "center",
        alignItems: "center"
    },
    userBar: {
        width: 100 + "%",
        height: config.styleConstants.rowHeight,
        backgroundColor: "white",
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-between"
    },
    userPic: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    iconBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + "%",
        borderColor: "rgb(233,233,233)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        marginLeft: 5
    },
});

export default InstaCloneStyles;