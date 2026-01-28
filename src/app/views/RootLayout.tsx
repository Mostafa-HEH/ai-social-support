import { Outlet } from "react-router-dom";
import styles from "./styles/RootLayout.module.scss";

const RootLayout = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
};

export default RootLayout;
