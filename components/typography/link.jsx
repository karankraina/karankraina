import styles from './link.module.css';

export default function Link(props) {
    return (
        <a className={styles.link} href={props.href} target={props.internal ? '_self' : '_blank'}>{props.label}</a>
    );
}