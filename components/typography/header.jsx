import styles from './header.module.css';

export default function H1(props){
    return (
        <h1 className={styles.header}>{props.children}</h1>
    );
}