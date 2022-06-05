import Head from "next/head";
import styles from "./styles/home.module.scss";

export default function Home() {
  return (
    <>
     <Head>
        <title>Board Tasks</title>
      </Head>
    <div>
      <h1 className={styles.title}>
        Primeiro projecto com <span> NextJS</span>
      </h1>
    </div>
    </>
  );
}
