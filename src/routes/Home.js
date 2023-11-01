import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const response = await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
        );
        const json = await response.json();

        setMovies(json.data.movies)
        setLoading(false);
    }

    console.log(movies);
    // 2. async, await 사용
    useEffect(() => {
        getMovies();
    }, [])


    // 1. useEffect 사용
    // useEffect(() => {
    //     fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
    //     .then((response) => response.json())
    //     .then((json) => {
    //         setMovies(json.data.movies)
    //         setLoading(false);
    //     });
        
    // }, []);
    console.log(movies);
    return (
        <div>
            {loading ? 
            (<h2>Loading...</h2>) : 
            (<div>
                {movies.map((movie) => (
                    <Movie 
                        key={movie.id}
                        id={movie.id}
                        coverImg={movie.medium_cover_image} 
                        title={movie.title} 
                        genres={movie.genres}
                    />
                ))}
            </div>
            )}
        </div>
    );
}

export default Home;