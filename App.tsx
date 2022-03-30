import { useState } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "containers/Index";
import Detail from "containers/Detail/Index";
import MovieContext from "components/MovieContext/Index";
import { store } from "store/Index";

const Stack = createNativeStackNavigator();

export default function App() {
    const [movieId, setMovieId] = useState("")
    
    return (
        <NavigationContainer>
            <Provider store={store}>
                <MovieContext.Provider value={[movieId, setMovieId]}> 
                    <Stack.Navigator initialRouteHome="Home">
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="Detail" component={Detail} />
                    </Stack.Navigator>
                </MovieContext.Provider> 
            </Provider>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1a1a1a',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
