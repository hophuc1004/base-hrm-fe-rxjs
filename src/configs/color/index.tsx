import { THEME_MODE } from "enums/theme";
import { COLOR_THEME_DARK, COLOR_THEME_LIGHT } from "./color";

export const getTheme = (themeMode?: THEME_MODE) => {
  const THEME = {
    [THEME_MODE.DARK]: COLOR_THEME_DARK,
    [THEME_MODE.LIGHT]: COLOR_THEME_LIGHT,
  };

  return THEME[themeMode || THEME_MODE.DARK];
};
