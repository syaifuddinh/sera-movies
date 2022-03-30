import axios from 'axios';
import App from 'configs/App';

export default {
    async list(keyword = "") {
        const configurationObject = {
            method: 'get',
            url: `${App.baseUrl}/movie/popular?api_key=${App.apiKey}`,
        };
        const ajax = await axios(configurationObject);
        const searchingKeyword = keyword.trim().toLowerCase();
        let response = {};
        response.results = ajax.data.results.map(value => {
            const response = {};
            response.id = value.id;
            response.title = value.title;
            response.rating = value.vote_average;
            response.imageUrl = App.imageUrl + "/" + value.poster_path;

            return response;
        });
        console.log(searchingKeyword);
        if(searchingKeyword) {
            response.results = response.results.filter(value => value.title.toLowerCase().search(searchingKeyword) > -1);
        }

        return response;
    },
    async show(id) {
        const configurationObject = {
            method: 'get',
            url: `${App.baseUrl}/movie/${id}?api_key=${App.apiKey}`,
        };
        const { data } = await axios(configurationObject);
        let response = {};
        response.id = data.id;
        response.title = data.title;
        response.description = data.overview;
        response.rating = data.vote_average;
        response.releaseDate = data.release_date;
        response.imageUrl = App.imageUrl + "/" + data.poster_path;
        response.studios = data.production_companies.map(value => value.name).join(", ");
        response.genres = data.genres.map(value => value.name).join(", ");

        return response;
    }
}