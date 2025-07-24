"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "./themeSwitcher.module.css";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className={styles.container}>
        <label className={styles.switch}>
          <input
            type="checkbox"
            onChange={handleTheme}
            checked={theme === "light"}
          />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
    </>
  );
}
