import { useSelector } from "react-redux";
import { selectTheme } from "../store/themeSwitcher/theme-selectors";
import {
  countryInfoSelector,
  selectCountryReducer,
} from "../store/countries/country-selectors";
import styles from "../style/scss/index.module.scss";
export default function CountryInfoUi({ country, contentSwitcher }) {
  // UseSelectors
  const countryObject = useSelector((state) =>
    countryInfoSelector(state.countryReducer, country)
  );

  const countries = useSelector(selectCountryReducer);
  const themeValue = useSelector(selectTheme);
  // ************

  // filter
  const allBorderCountries = countries.filter((country) => {
    if (countryObject.borders) {
      return countryObject.borders.includes(country.cca3);
    } else {
      return false;
    }
  });

  // ************

  // mapping
  const bordersBtns = allBorderCountries.map((country, i) => {
    return (
      <button
        className={styles.country__btn}
        key={i}
        onClick={(e) => contentSwitcher("openCountry", country.name.common)}
      >
        {country.name.common}
      </button>
    );
  });

  // ************

  // internationalisations
  const geo = navigator.language;
  const adaptivePopulation = new Intl.NumberFormat(geo).format(
    countryObject.population
  );

  // ************

  return (
    <div
      className={
        themeValue ? styles.darkCountryInfoDiv2 : styles.countryInfoDiv2
      }
    >
      <button
        onClick={() => contentSwitcher("back")}
        className={styles.btnBack}
      >
        ← Back
      </button>
      <div className={styles.countryInfoDiv2__clicked}>
        <div className={styles.container__image}>
          <img
            src={countryObject.flags.png}
            alt={countryObject.name.common}
            className={styles.image}
          />
        </div>
        <div className={styles.countryInfoDiv2__main}>
          <div>
            <div className={styles.country}>{countryObject.name.common}</div>
            <div className={styles.text_div}>
              <div className={styles.page}>Native Name:</div>
              <div className={styles.text_div__content}>
                {countryObject.name.official}
              </div>
            </div>
            <div className={styles.text_div}>
              <div className={styles.page}>Population:</div>
              <div className={styles.text_div__content}>
                {adaptivePopulation}
              </div>
            </div>
            <div className={styles.text_div}>
              <div className={styles.page}>Region:</div>
              <div className={styles.text_div__content}>
                {countryObject.region}
              </div>
            </div>
            <div className={styles.text_div}>
              <div className={styles.page}>Sub Region:</div>
              <div className={styles.text_div__content}>
                {countryObject.subregion}
              </div>
            </div>
            <div className={styles.text_div}>
              <div className={styles.page}>Capital:</div>
              <div className={styles.text_div__content}>
                {countryObject.capital.join(", ")}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.countryInfoDiv2__endContent}>
          <div>
            <div className={styles.text_div}>
              <div className={styles.page}>Top Level Domain:</div>
              <div className={styles.text_div__content}>
                {countryObject.tld.join(", ")}
              </div>
            </div>
            <div className={styles.text_div}>
              <div className={styles.page}>Currencies:</div>
              <div className={styles.text_div__content}>
                {Object.values(countryObject.currencies)[0].name}
              </div>
            </div>
            <div className={styles.text_div}>
              <div className={styles.page}>Languages:</div>
              <div className={styles.text_div__content}>
                {Object.values(countryObject.languages).join(", ")}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.countriesDiv}>
          <h4>Border Countries:</h4>
          <div className={styles.btn_div}>
            {bordersBtns.length === 0 ? "Island state" : bordersBtns}
          </div>
        </div>
      </div>
    </div>
  );
}
