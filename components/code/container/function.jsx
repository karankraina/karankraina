import Link from 'next/link';
import styles from './function.module.css';

export default function Function(props) {
    const { label, href } = props;
    return (
        <Link href={href}>
            <a className={styles.function}>{ label }</a>
        </Link>
    );
}