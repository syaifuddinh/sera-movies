import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, ScrollView, Text } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { change } from 'store/Index';
import Card from "components/Card/Index";
import Movies from "endpoints/Movies";
import Styles from "styles/Index";
import MovieContext from "components/MovieContext/Index";

export default function Index({ navigation }) {
    const globalKeyword = useSelector(state => state.globalKeyword);
    const dispatch = useDispatch();
    const [items, setItems] = useState([])
    const [, setMovieId] = useContext(MovieContext);

    const getData = async (keyword = "") => {
        let listMovie: any = await Movies.list(keyword);
        setItems(listMovie.results);
    }

    const onKeywordChange = () => {

    }

    useEffect(() => {
        getData();
    }, [])

    const show = (id) => {
        setMovieId(id);
        navigation.push("Detail")
    }

    return (
        <View style={Styles.primaryContainer}>
            <View style={Styles.divider}>
            </View>
            <TextInput
                style={Styles.input}
                placeholder="Search movies..."
                onChange={({ nativeEvent }) => { 
                    dispatch(change(nativeEvent.text, "CHANGE")) 
                    getData(globalKeyword);
                }}
                value={globalKeyword}
            />
            <ScrollView>  
                { items.map(value => (
                    <Card
                        key={value.title}
                        title={value.title}
                        rating={value.rating}
                        imageUrl={value.imageUrl}
                        onPress={() => {
                            show(value.id);
                        }}
                    />
                )) }
            </ScrollView>  
              <StatusBar style="auto" />
        </View>
    );
}