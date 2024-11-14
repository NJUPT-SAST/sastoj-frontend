import { Button } from "@ui-aurora/react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

export const RouteLibrary = () => {
  const navigate = useNavigate();
  return (
    <Button
      className={styles["route-botton"]}
      color="border"
      onClick={() => {
        navigate("/Library");
      }}
      shadow="none"
    >
      <span>前往题库</span>
      <ArrowRight size={14} />
    </Button>
  );
};
