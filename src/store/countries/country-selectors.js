export const selectCountryReducer = (state) => state.countryReducer;

export const selectRegion = (state, region) => {
  return state.filter((item) => {
    if (region === "None") {
      return item;
    } else {
      return item.region === region;
    }
  });
};

export const countryInfoSelector = (state, country) => {
  return state.find((item) => {
    return item.name.common === country;
  });
};
