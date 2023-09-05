import { useSelector } from "react-redux";

import { selectRegion } from "../store/countries/country-selectors";

import styles from "../style/scss/index.module.scss";
import CountryUi from "../UI/CountryUI";

import { selectTheme } from "../store/themeSwitcher/theme-selectors";

export default function CountryList({ region, searchValue, contentSwitcher }) {
  const themeValue = useSelector(selectTheme);
  const selectedRegion = useSelector((state) => {
    return selectRegion(state.countryReducer, region);
  });
  // Фильтрация поиска
  const fullSearchSelectorRegion = selectedRegion.filter((item) => {
    if (searchValue === "") return true;
    const countryName = item.name.common.toLowerCase().split(" ").join("");
    const searchCountryFragment = searchValue.toLowerCase();
    return countryName.includes(searchCountryFragment);
  });

  const transformingDataToComponents = fullSearchSelectorRegion.map(
    (item, i) => {
      const geo = navigator.language;

      const adaptivePopulation = new Intl.NumberFormat(geo).format(
        item.population
      );
      return (
        <CountryUi
          country={item.name.common}
          population={adaptivePopulation}
          region={item.region}
          capital={item.capital}
          imagePath={item.flags.png}
          flagsAlt={item.flags.alt}
          key={i}
          contentSwitcher={contentSwitcher}
        />
      );
    }
  );
  return (
    <div className={themeValue ? styles.darkCountryList : styles.countryList}>
      {transformingDataToComponents}
    </div>
  );
}
