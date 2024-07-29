
import {GetTopSongsApi} from './api/apiHandlers/SpotifyApiService';
import {useEffect, useState} from "react";

function QuickStats() {
    const [topSongs, setTopSongs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        getTopSongs();
    }, []);
    async function getTopSongs() {
        const response = await fetch("/api/spotify/top-songs?amount=5");
        const data = await response.json();

        if (response.ok){
            setTopSongs(data);
        }
        else {
            setError(data.error);
        }
    }
    
    return (
        <div>
            <h1>
                Quick STATS
            </h1>
            {loading ? (<p>Loading, give me a sec...</p>) : error ? (<p>Error has occurred</p>) : (
                <ul>
                    {topSongs.map((song, index) => (
                        <li key={index}>{song}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}


export default QuickStats;