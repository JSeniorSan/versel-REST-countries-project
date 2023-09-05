import Header from "./Header";
import MainBlock from "./MainBlock";
import CountryInfoUi from "../UI/CountryInfoUi";
import { useState } from "react";
import styles from "../style/scss/index.module.scss";
import { useSelector } from "react-redux";
import { selectTheme } from "../store/themeSwitcher/theme-selectors";

export default function Wrapper() {
  const themeValue = useSelector(selectTheme);

  const [data, setData] = useState({});
  const contentSwitcher = (str, country) => {
    setData({ string: str, dataCountry: country });
  };

  const switcher = () => {
    switch (data.string) {
      case "openCountry": {
        console.log("opened");
        return (
          <CountryInfoUi
            country={data.dataCountry}
            contentSwitcher={contentSwitcher}
          />
        );
      }
      case "back": {
        console.log("back");
        return <MainBlock contentSwitcher={contentSwitcher} />;
      }
      default: {
        return <MainBlock contentSwitcher={contentSwitcher} />;
      }
    }
  };

  return (
    <div className={themeValue ? styles.darkWrapper : styles.wrapper}>
      <Header />
      {switcher()}
    </div>
  );
}
