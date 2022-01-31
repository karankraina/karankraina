import styles from './colored-dots.module.css';

export default function ColoredDot({ color }) {
    console.log({color, styles: styles[color]});
    return (
        <div className={styles[color]} />
    );
}