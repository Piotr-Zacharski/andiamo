import styles from "./page.module.css";


export default function Home() {
  return <main className={styles.main}>
    <div className="flex flex-row">
      <img src="/walk.png" alt="Andiamo"/>
      <h1 className="text-5xl">Andiamo APP</h1>
    </div>
  </main>;
}
