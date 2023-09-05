import styles from "../style/scss/index.module.scss";
import MoonStyleSwitcherMode from "../UI/StyleModeUI";
import { useSelector } from "react-redux";
import { selectTheme } from "../store/themeSwitcher/theme-selectors";
export default function Header() {
  const themeValue = useSelector(selectTheme);

  return (
    <header
      className={themeValue ? styles.darkHeaderDiv : styles.whiteHeaderDiv}
    >
      <div className={styles.title}>Where in the world?</div>
      <MoonStyleSwitcherMode />
    </header>
  );
}
