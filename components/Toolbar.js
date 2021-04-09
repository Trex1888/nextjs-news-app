import styles from "../styles/Toolbar.module.css";
import { useRouter } from "next/router";

function Toolbar() {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => router.push("/feed1")}>Feed</div>
      <div onClick={() => router.push("/eom")}>EOM</div>
      <div onClick={() => (window.location.href = "https://twitter.com/phish")}>
        Twitter
      </div>
    </div>
  );
}

export default Toolbar;