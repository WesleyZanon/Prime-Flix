import axios from "axios";

//Base da URL: https://api.themoviedb.org/3/
// URL Da API: /movie/now_playing?api_key=53b7497ecd261cf50625ba9b51d523f6&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;