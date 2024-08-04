import {Track} from "@/interfaces/track";
import styles from "./TrackComponent.module.css";

function TrackComponent({track, num}: {track: Track, num: number}) {
    return (
        <div>
            <div className={styles.centerContent}>
                <br></br>  
                <h2 className={styles.trackHeading}>{num}. {track.name}</h2>
                <img className={styles.imageContainer} src={track.album.images[1].url}/>
                <h3 className={styles.trackHeading}>{track.artists.map((x) => x.name).join(", ")}</h3>
                <h4 className={styles.text}>{track.album.name}</h4>
                <video width="640" height="60" controls>
                    <source src={track.preview_url} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <br></br>
                <a className={`${styles.text} ${styles.link}`} href={track.external_urls.spotify}>Listen on Spotify</a>
            </div>
        </div>
    )
}

export default TrackComponent;