import axios from "axios";
import { AddAllAction } from "../store/countries/country-actions";
export const Api = () => (dispatch) => {
  axios
    .get("https://restcountries.com/v3.1/all")
    .then((resp) => {
      dispatch(AddAllAction(resp.data));
    })
    .catch((err) => {
      console.error(err);
    });
};
