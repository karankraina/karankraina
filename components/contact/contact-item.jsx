import styles from './contact.module.css';

export default function ContactItem(props) {
    return (

        <a class={styles.ContactItem} href={props.contact.url} target="_blank">
            <svg class={styles.svg} style={{ fill: props.contact.color }} viewBox="0 0 512 512">
            <path d={props.contact.svg}>
            </path>
        </svg></a>
    );
}