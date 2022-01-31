import Image from 'next/image';

import styles from './avatar.module.css';

export default function Avatar(props) {
    return (
        <Image
        src={props.src}
        height={props.edge}
        width={props.edge}
        alt={props.alt}
        className={styles.avatar}
        />
    );
}
