import {Track} from "@/interfaces/track";

function TrackComponent({track}: {track: Track}) {
    return (
        <div>
            <div>
                <h2>{track.name}</h2>
                <img src={track.album.images[2].url}/>
                <a href={track.external_urls.spotify}>Listen on Spotify</a>
            </div>

            <p>{track.artists.map((x) => x.name).join(", ")}</p>
        </div>
    )
}
export default  TrackComponent;