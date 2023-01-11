import Link from "next/link";
import styles from "@/styles/Footer.module.css";
import { useRouter } from "next/router";
export default function Footer() {
  const router = useRouter();
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Alexey Vasilkov 2023 </p>
      <p>
        {router.pathname === "/about" ? (
          <Link href="/">Home</Link>
        ) : (
          <Link href="/about">About This Project</Link>
        )}
      </p>
    </footer>
  );
}
