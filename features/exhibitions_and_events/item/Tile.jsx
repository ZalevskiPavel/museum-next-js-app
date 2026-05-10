import styles from "./tile-style.module.css"

export default function CustomNavBar({ data }) {
    return (
        <div className={styles.tile}>
            {console.log(data)}
            <img src={`/photo-waterfall/Image 0${data.SmallPictureId}.png`} alt={data.EventName} />
            <a href={`/exhibitions_and_events/${data.Id}`} className={styles.tile_description}>
                <p>{data.EventType}</p>
                <h3>{data.EventName}</h3>
                <p className={styles.tile_date}>Starts on: {new Date(data.StartDate).toISOString().split('T')[0]}</p>
                <p className={styles.tile_intro}>{data.Introduction}</p>
                <p>{data.TargetVisitors}</p>
            </a>
        </div>
    );
}