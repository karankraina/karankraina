import styles from './statement.module.css';

export default function Statement(props) {
    const { content } = props;
    return (
        <p className={styles.line}>
            {
                content.map((item, key) => (
                    <span key={key} className={styles[item.color]}>
                        {item.text}
                    </span>
                ))
            };
        </p>
    );
}