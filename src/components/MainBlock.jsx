import styles from "../style/scss/index.module.scss";
import CountryList from "./CountryList";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectTheme } from "../store/themeSwitcher/theme-selectors";

export default function MainBlock({ contentSwitcher }) {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  const [regionValue, setRegionValue] = useState("None");

  // --------------------------
  function changeRegion(e) {
    setRegionValue(e.target.value);
  }
  // --------------------------

  const themeState = useSelector(selectTheme);

  // --------------------------
  return (
    <div>
      <div
        className={themeState ? styles.darkSecondFolder : styles.secondFolder}
      >
        <div className={styles.inputDiv}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            placeholder="Search for a contry..."
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div></div>
        <div>
          <select
            className={styles.secondFolder__selector}
            onChange={(e) => changeRegion(e)}
          >
            <option defaultValue hidden>
              Filter by Region
            </option>
            <option value="None">None</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>

      <CountryList
        region={regionValue}
        searchValue={inputValue}
        contentSwitcher={contentSwitcher}
      />
    </div>
  );
}
