import styles from './container.module.css';

import ColoredDot from './colored-dots';

export default function CodeContainer(props) {
    return (
        <div className={styles.container}>
            <div className={styles.topbar}>
                <ColoredDot color="red" />
                <ColoredDot color="yellow" />
                <ColoredDot color="green" />
            </div>
            <div className={styles.codewrapper}>
                <div className={styles.codearea}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}