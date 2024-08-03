
import {GetAuthorizationCode} from './api/apiHandlers/SpotifyApiService';
import {useEffect, useState} from "react";

import {Track} from "@/interfaces/track";
import TrackComponent from "@/components/TrackComponent";

function Unwrapped() {
    const [topSongs, setTopSongs] = useState<Track[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('topSongs state has changed:', topSongs);
    }, [topSongs]);
    async function getTopSongs() {
        try {
            console.log("Fetching top songs...");
            const response = await fetch("http://localhost:3000/api/spotify/topsongs", {
                method: 'GET',
                credentials: 'include'});
            console.log("Response received");

            if (!response.ok) {
                console.error(`HTTP error! status: ${response.status}`);
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const json = await response.json();
            
            const tracks : Track[] = json.data["items"];
            console.log("Data parsed:", tracks);
            setTopSongs(tracks);
            setLoading(false)
        } catch (error) {
            console.error('Error fetching top songs:', error);
            setError(error.message);
        }
    }
    
    async function GetAuthorization() {
        try {
            console.log("Attempting to get authorization")

            window.location.href = "/api/spotify/authorization";

            // console.log("Got the authorization")
            // if (!response.ok) {
            //     console.error("Error occurred")
            // }
            //
            // var data = response.json();
            //
            // return data;
        }
        catch (error) {
            console.error('Error fetching top songs:', error);
            setError(error.message);
        }
    }
    
    async function GetCookie() {
        try {
            const response = await fetch("http://localhost:3000/api/spotify/protected", {
                method: "GET",
                credentials: 'include'
            });
            console.log("Got the cookie")

            const data = await response.json();
            console.log(data)

            if (!response.ok){
                console.error("Response is not success for getting cookie")
                throw new Error("Response is not success for getting cookie")
            }
            
            return 

        }
        catch (error) {
            console.error('Error fetching top songs:', error);
        }
    }
    
    return (
        <div>
            <h1>
                Unwrapped.
            </h1>
            <button onClick={GetAuthorization}> Log In</button>
            <button onClick={GetCookie}> Get auth</button>

            <button onClick={getTopSongs}> Get songs</button>
            
            {loading ? (<p>Loading, give me a sec...</p>) : error ? (<p>Error has occurred</p>) : (
                <ul>
                    {(topSongs || []).map((song, index) => (
                        <TrackComponent track={song} key={index}/>
                    ))}
                </ul>
            )}
        </div>
    )
}


export default Unwrapped;