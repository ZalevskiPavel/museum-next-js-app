import styles from "./line-styles.module.css"

export default function HeadingLine({width}){

    let lineStyle;

    if (width > 50) {
        lineStyle = {
            width: `${width}%`,
            bottom: '-10px'
        };
    } else {
        lineStyle = {
            width: `${width}%`,
            top: '-10px'
        };
    }

    return <div className={styles.heading_line} style={lineStyle}></div>;
}