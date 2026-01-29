import { MenuItem, Select } from "@mui/material";
import styles from "./LanguageChange.module.scss";
import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";

const LanguageChange = () => {
  const { t } = useTranslation();

  return (
    <Select
      size="small"
      variant="outlined"
      className={styles.langSelect}
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      aria-label={t("common.language")}
      aria-controls="html"
    >
      <MenuItem value="en">EN</MenuItem>
      <MenuItem value="ar">العربية</MenuItem>
    </Select>
  );
};

export default LanguageChange;
