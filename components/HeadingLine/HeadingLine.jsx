import styles from "./line-styles.module.css"

export default function HeadingLine({width}){
    return <div className={styles.heading_line} style={{width: `${width}%`}}></div>;
}