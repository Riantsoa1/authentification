import Image from "next/image";
import styles from "./page.module.css";
import LoginPage from "@/login";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <LoginPage />
      </main>
    </div>
  );
}
