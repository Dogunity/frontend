import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useSessionStorage from "../common/useSessionStorage";
import {
  afterLoginMenuItems,
  beforeLoginMenuItems,
} from "../../utils/staticData";

const useMyHeader = () => {
  const { item, clearSessionStorageItem } = useSessionStorage();
  const menuItems = useMemo(
    () => (item ? afterLoginMenuItems : beforeLoginMenuItems),
    [item]
  );

  const navigate = useNavigate();

  const handleLogoItemButtonClick = () => {
    navigate("/");
  };

  const handleMenuItemButtonClick = (title, path) => () => {
    if (title === "Sign out") clearSessionStorageItem();
    navigate(path);
  };

  return {
    menuItems,
    handleLogoItemButtonClick,
    handleMenuItemButtonClick,
  };
};

export default useMyHeader;
