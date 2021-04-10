import styles from "../styles/Home.module.css";
import Toolbar from "../components/Toolbar";

export default function Home() {
  return (
    <div className="page-container">
      <Toolbar />

      <div className={styles.main}>
        <h1>Next.js News App</h1>

        <h3>
          Click the 'Feed' tab above to view the most recent news headlines.{" "}
        </h3>
      </div>
    </div>
  );
}
