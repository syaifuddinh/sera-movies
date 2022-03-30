import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Styles from "styles/Index"; 

type IProps = {
    title: string;
    imageUrl: string;
    rating: number;
    onPress: any;
};

export default function App(props: IProps) {
    return (
        <View style={Styles.container}>
            <Image 
                style={Styles.image}
                source={{uri: props.imageUrl}}
            />
            <View style={Styles.main}>
                <Text style={Styles.rating}>
                    { props.rating }
                </Text>
                <Text style={Styles.title}>
                    { props.title }
                </Text>
                <View style={Styles.divider}></View>
                <Button
                    style={Styles.button}
                    title="View Information"
                    onPress={props.onPress}
                />
            </View>
        </View>
    );
}
