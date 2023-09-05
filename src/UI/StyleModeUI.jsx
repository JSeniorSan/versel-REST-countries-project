import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { darkTheme, lightTheme } from "../store/themeSwitcher/theme-actions";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../store/themeSwitcher/theme-selectors";
import styles from "../style/scss/index.module.scss";
export default function MoonStyleSwitcherMode() {
  const themeValue = useSelector(selectTheme);
  const dispatch = useDispatch();
  return (
    <div className={styles.switcherTheme}>
      <div className={styles.divMoon}>
        <div className={styles.divMoon__switcher}>
          <button
            className={themeValue ? styles.darkSunElement : styles.sunElement}
            onClick={() => {
              dispatch(darkTheme);
            }}
          >
            <FontAwesomeIcon icon={faSun} className={styles.sun} size="xl" />
          </button>
          <button
            className={themeValue ? styles.darkMoonElement : styles.moonElement}
            onClick={() => {
              dispatch(lightTheme);
            }}
          >
            <FontAwesomeIcon icon={faMoon} size="xl" className={styles.moon} />
          </button>
        </div>

        <p className={styles.divMoon__String}>
          {themeValue ? "Dark Mode" : "Light Mode"}
        </p>
      </div>
    </div>
  );
}
