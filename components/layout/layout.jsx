import Head from "next/head";

import styles from './layout.module.css';

// Develop a layout component for react app
export default function Layout(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Karan Raina - Full Stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Karan Raina - Full Stack Developer" />
      </Head>
      {props.children}
    </div>
  );
}
