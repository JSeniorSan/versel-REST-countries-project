export const themeReducer = (state = false, action) => {
  switch (action.type) {
    case "DARK_THEME": {
      return false;
    }
    case "LIGHT_THEME": {
      return true;
    }

    default: {
      return state;
    }
  }
};
