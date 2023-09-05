import { AddAllData } from "./county-constants";

export const AddAllAction = (data) => ({
  type: AddAllData,
  payload: data,
});
