import { useState, useEffect, useContext } from 'react';
import Detail from "components/Detail/Index";
import MovieContext from "components/MovieContext/Index";
import Movies from "endpoints/Movies";

export default function Index() {
    const [movieId, ] = useContext(MovieContext);
    const [item, setItem] = useState({})

    const getData = async () => {
        let data: any = await Movies.show(movieId);
        setItem(data);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <Detail
            title={item.title}
            releaseDate={item.releaseDate}
            description={item.description}
            genres={item.genres}
            studios={item.studios}
            rating={item.rating}
            imageUrl={item.imageUrl}
        />
    );
}
