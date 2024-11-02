import { useParams } from "react-router-dom";
import { useCaseMoreStore } from "../../../stores/useCaseMoreStore";
import { Empty } from "../../empty";
import { StatusDescriptions, StatusTag } from "../statusTag";
import styles from "./index.module.scss";
import { ArrowLeft, Database, Timer } from "lucide-react";
import { useCasesStore } from "../../../stores/useCasesStore";
import { Badge, Button } from "@ui-aurora/react";
import { handleDate } from "../../../utils/aboutHandleData";
import { Editor } from "@monaco-editor/react";

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
    return `${integerPart || 0}.${decimalPart.slice(0, 2)}`; // 拼接成新的字符串
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

const ProblemCases = () => {
  const { problemId } = useParams();
  const { clearCaseId, CaseId } = useCaseMoreStore((state) => ({
    clearCaseId: state.clearCaseId,
    CaseId: state.CaseId,
  }));



  const cases = useCasesStore((state) => state.cases);
  const casesArr = cases.get(problemId!);
  const casesValue = casesArr?.find((item) => item.id == CaseId);
  //提交详细结果
  const [stateResult, , color] = StatusDescriptions(casesValue?.singleDetial?.state!!)
  const createTime = handleDate(casesValue?.singleDetial.createdAt)
  const totalTime = transformNumberFromBigInt(casesValue?.singleDetial?.totalTime||'0', "time")
  const totalMemory = transformNumberFromBigInt(casesValue?.singleDetial?.maxMemory||'0', "memory")
  //是否展示空的判断
  const isEmpty = !casesValue?.singleCases.length && !casesValue?.singleDetial



  return (
    <div style={{ height: "fit-content" }}>
      <Button
        className={styles.icon}
        color="secondary"
        size="small"
        shadow="small"
        onClick={() => clearCaseId()}
      >
        <ArrowLeft size={20} />
        <span>返回题目内容</span>
      </Button>
      {casesValue?.singleDetial ? (
        <div className={styles['cases-result']}>
          {/* <MonacoEditor
              defaultValue={casesValue?.singleDetial?.code}
            /> */}
          <div className={styles['result-statetime']}>
            <span style={{ color: color }} className={styles['state']}>{stateResult}</span>
            <div style={{ fontSize: '0.9rem' }}>提交于:<span>{createTime}</span></div>
          </div>
          <div className={styles['result-more']}>
            <div className={styles['result-more-item']}>
              <span className={styles['result-more-item-icon']}><Timer />执行总用时</span>
              <span>{totalTime} ms</span>
            </div>
            <div className={styles['result-more-item']}>
              <span className={styles['result-more-item-icon']}><Database />消耗最大内存</span>
              <span>{totalMemory} MB</span>
            </div>
          </div>
          {/* <Editor
            defaultLanguage="cpp"
            defaultValue={casesValue?.singleDetial?.code || ''}
            options={{
              readOnly: true, // 设置编辑器为只读
              minimap: { enabled: false }, // 禁用小地图
            }}
          /> */}
        </div>
      ) : ''}
      {casesValue?.singleCases.length ? (
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
                    backgroundColor: index % 2 !== 0 ? "#eeeeee" : "#fff",
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
                  >{`${transformNumberFromBigInt(item.memory, "memory")} MB`}</div>
                  <div>
                    <Badge
                      className={styles.badge}
                      content={item.point.toString()}
                      size="small"
                      type={item.point == 0 ? "error" : "info"}
                    />
                  </div>
                </div>
              );
            })}
          </>
        </div>
      ) : ''}
      {isEmpty &&
        <div style={{ height: "unset", marginTop: "40%" }}>
          <Empty />
        </div>}
    </div>
  );
};

export default ProblemCases;
