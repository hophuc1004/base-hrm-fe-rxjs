import { getTheme } from "configs/color";
import { useSelector } from "react-redux";
import type { RootState } from "store/index.store";

export function useTheme() {
  const { themeMode } = useSelector((state: RootState) => state.localConfig);
  return getTheme(themeMode);
}
