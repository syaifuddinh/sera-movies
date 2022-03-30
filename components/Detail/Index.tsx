import { Text, View, Image, ScrollView } from 'react-native';
import Styles from "styles/Index";

type IProps = {
    title: string;
    description: string;
    genres: string;
    studios: string;
    releaseDate: string;
    imageUrl: string;
    rating: number;
};

export default function Index(props: IProps) {
    return (
        <ScrollView style={Styles.secondaryContainer}>
            <View style={Styles.divider} />
            <Image 
                style={Styles.image}
                source={{uri: props.imageUrl}}
            />
            <View style={Styles.main}>
                <Text style={Styles.title}>
                    Title : { props.title }
                </Text>
                <Text style={Styles.title}>
                    Release Date : { props.releaseDate }
                </Text>
                <Text style={Styles.title}>
                    Rating : { props.rating }
                </Text>
                <Text style={Styles.title}>
                    Genres : { props.genres }
                </Text>
                <Text style={Styles.title}>
                    Studios : { props.studios }
                </Text>
                <Text style={Styles.title}>
                    Overview : { props.description }
                </Text>
            </View>
        </ScrollView>
    );
}
