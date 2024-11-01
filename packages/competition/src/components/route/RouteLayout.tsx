import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import { Dialog } from "@ui-aurora/react";
import { useState } from "react";

export const RouteLayout = ({ children }: { children: React.ReactNode }) => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const handleOK = () => {
    setVisible(false);
    localStorage.clear();
    navigate("/login", { replace: true });
  };
  return (
    <div className={styles.icon} onClick={() => setVisible(true)}>
      <Dialog
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={() => handleOK()}
        header={<h4>你确定要退出比赛吗？</h4>}
      />
      {children}
    </div>
  );
};
