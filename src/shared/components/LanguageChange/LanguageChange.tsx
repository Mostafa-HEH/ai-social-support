import { MenuItem, Select } from "@mui/material";
import styles from "./LanguageChange.module.scss";
import i18n from "../../../i18n";

const LanguageChange = () => {
  return (
    <Select
      size="small"
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      className={styles.langSelect}
      variant="outlined"
    >
      <MenuItem value="en">EN</MenuItem>
      <MenuItem value="ar">العربية</MenuItem>
    </Select>
  );
};

export default LanguageChange;
