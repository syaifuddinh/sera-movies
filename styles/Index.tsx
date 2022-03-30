import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#1a1a1a',
        justifyContent: 'center'
    },
    input: {
        width: '100%',
        padding: 8,
        backgroundColor: 'white'
    },
    secondaryContainer: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#1a1a1a'
    },
    container: {
        backgroundColor: '#333333',
        marginTop: 16,
        overflow: "hidden",
        width: '100%',
        borderRadius: 8
    },
    main: {
        padding: 16
    },
    divider: {
        width: '100%',
        height: 16
    },
    button: {
        marginTop: 16
    },
    rating: {
        color: "white"
    },
    image: {
        width: '100%',
        height: 250
    },
    title: {
        marginTop: 16,
        fontWeight: "500",
        color: "white"
    }
});

export default styles;
