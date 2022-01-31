import Head from "next/head";

import styles from './layout.module.css';

// Develop a layout component for react app
export default function Layout(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Karan Raina - Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Karan Raina - Web Developer" />
      </Head>
      {props.children}
    </div>
  );
}
