import { useEffect, useState } from "react"
import api from "../../services/api";


//Base da URL: https://api.themoviedb.org/3/
// Url da API: /movie/now_playing?api_key=53b7497ecd261cf50625ba9b51d523f6&language=pt-BR


export default function Home(){

    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "53b7497ecd261cf50625ba9b51d523f6",
                    language: "pt-BR",
                    page: 1,
                }
            })
        }

        loadFilmes();

    },[])
    


    return(
        <div>
            <h1>HomePage</h1>
           
        </div>
    )
}