import styles from "../style/scss/index.module.scss";
export default function CountryUi({
  country,
  population,
  region,
  capital,
  imagePath,
  flagsAlt,
  contentSwitcher,
}) {
  return (
    <div
      className={styles.container}
      onClick={() => {
        contentSwitcher("openCountry", country);
      }}
    >
      <div className={styles.container__image}>
        <img src={imagePath} alt={flagsAlt} className={styles.image} />
      </div>
      <div className={styles.conatiner__mainInfo}>
        <h2>{country}</h2>
        <h3>{"Population: " + population}</h3>
        <h3>{"Region: " + region}</h3>
        <h3>{"Capital: " + capital}</h3>
      </div>
    </div>
  );
}
