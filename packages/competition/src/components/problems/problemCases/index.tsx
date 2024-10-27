import { useParams } from "react-router-dom";
import { useCaseMoreStore } from "../../../stores/useCaseMoreStore";
import { Empty } from "../../empty";
import { StatusTag } from "../statusTag";
import styles from "./index.module.scss";
import { ArrowLeft } from "lucide-react";
import { useCasesStore } from "../../../stores/useCasesStore";
import { Badge } from "@ui-aurora/react";
const transformNumberFromBigInt = (
  originNumber: string,
  type: "time" | "memory",
): string => {
  // 确保输入是有效的数字字符串
  if (!/^\d+$/.test(originNumber)) {
    throw new Error("Invalid number format");
  }

  if (type === "time") {
    // 将字符串视为整数，插入小数点
    const paddedNumber = originNumber.padStart(6, "0"); // 确保长度为6
    const integerPart = paddedNumber.slice(0, paddedNumber.length - 6);
    const decimalPart = paddedNumber.slice(paddedNumber.length - 6);
    return `${integerPart}.${decimalPart.slice(0, 2)}`; // 拼接成新的字符串
  } else {
    // 对于 memory 类型，乘以 8 并除以 1000000，处理字符串
    const multipliedNumber = (parseInt(originNumber, 10) * 8).toString();
    const result = (parseInt(multipliedNumber, 10) / 1000000).toString();

    // 确保有小数部分，并控制在两位
    const resultParts = result.split(".");
    const integerPart = resultParts[0]; // 不补零
    const decimalPart = (resultParts[1] || "00").slice(0, 2); // 确保小数部分最多两位

    return `${integerPart}.${decimalPart}`; // 拼接并返回
  }
};

export const ProblemCases = () => {
  const { problemId } = useParams();
  const { clearCaseId, CaseId } = useCaseMoreStore((state) => ({
    clearCaseId: state.clearCaseId,
    CaseId: state.CaseId,
  }));
  const cases = useCasesStore((state) => state.cases);
  const casesArr = cases.get(problemId!);
  const casesValue = casesArr?.find((item) => item.id == CaseId);
  // console.log(casesValue);

  if (casesValue?.singleCases.length) {
    return (
      <div style={{ height: "fit-content" }}>
        <span className={styles.icon}>
          <ArrowLeft onClick={() => clearCaseId()} />
        </span>
        <div className={styles["cases-container"]}>
          <>
            <div className={styles["cases-header"]}>
              <div>节点</div>
              <div>状态</div>
              <div>时间</div>
              <div>内存</div>
              <div>分数</div>
            </div>
            {casesValue?.singleCases?.map((item, index) => {
              return (
                <div
                  className={styles["cases-item"]}
                  key={index}
                  style={{
                    backgroundColor: index % 2 !== 0 ? "#f5f5f5" : "#fff",
                  }}
                >
                  <span className={styles.id}>{item.index + 1}</span>
                  <div>
                    <StatusTag status={item?.state} />
                  </div>
                  <div
                    className={styles.font}
                  >{`${transformNumberFromBigInt(item.time, "time")} ms`}</div>
                  <div
                    className={styles.font}
                  >{`${transformNumberFromBigInt(item.memory, "memory")} mb`}</div>
                  <div>
                    <Badge
                      className={styles.badge}
                      content={item.point.toString()}
                      size="small"
                      type={item.point == 0 ? "error" : "info"}
                      shadow="small"
                    />
                  </div>
                </div>
              );
            })}
          </>
        </div>
      </div>
    );
  } else
    return (
      <>
        <ArrowLeft
          style={{ marginBottom: 16 }}
          size={30}
          onClick={() => clearCaseId()}
        />
        <div style={{ height: "unset", marginTop: "40%" }}>
          <Empty />
        </div>
      </>
    );
};
