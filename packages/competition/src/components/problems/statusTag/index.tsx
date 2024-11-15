import { Badge } from "@ui-aurora/react";
import styles from "./index.module.scss";

export const StatusDescriptions = (
  status: number,
): [string, "ghost" | "success" | "error" | "warning" | "info" | undefined] => {
  switch (status) {
    case 0:
      return ["无效", "ghost"];
    case 1:
      return ["通过", "success"];
    case 2:
      return ["编译错误", "error"];
    case 3:
      return ["答案错误", "error"];
    case 4:
      return ["格式错误", "error"];
    case 5:
      return ["运行错误", "error"];
    case 6:
      return ["时间超限", "warning"];
    case 7:
      return ["内存超限", "warning"];
    case 8:
      return ["输出超限", "warning"];
    case 9:
      return ["等待中", "info"];
    case 10:
      return ["评测中", "info"];
    case 11:
      return ["系统错误", "error"];
    case 12:
      return ["不通过", "error"];
    default:
      return ["未知状态", "error"];
  }
};

export const StatusTag = ({ status }: { status: number }) => {
  const [content, type] = StatusDescriptions(status);
  return <Badge className={styles.badge} type={type} content={content} />;
};
