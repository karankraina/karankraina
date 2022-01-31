import styles from './code.module.css';

export default function Comment(props) {
    return (
        <>
            <p className={styles.comment}>/* {props.text} */</p>
            {props.newLine ? <p></p> : null}
        </>
    );
}