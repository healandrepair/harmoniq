import {Track} from "@/interfaces/track";
import styles from "./ArtistComponent.module.css";
import {ArtistObject} from "@/interfaces/artistObject";

function ArtistComponent({artist}: { artist: ArtistObject }) {
    return (<div>
        <div>
            <h2 className={styles.trackHeading}>{artist.name}</h2>
            <img className={styles.imageContainer} src={artist.images[2].url}/>
            <h3 className={styles.trackHeading}>{artist.genres.join(", ")}</h3>
            <h4 className={styles.text}>Followers: {artist.followers.total}</h4>
            <a className={styles.text} href={artist.external_urls.spotify}>Listen on Spotify</a>
        </div>
    </div>)
}

export default ArtistComponent;