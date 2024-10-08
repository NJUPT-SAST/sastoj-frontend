import { useParams } from "react-router-dom";
import { useCaseMoreStore } from "../../../stores/useCaseMoreStore";
import { Empty } from "../../empty";
import { StatusTag } from "../statusTag";
import styles from './index.module.scss'
import { ArrowLeft } from "lucide-react";
import { useCasesStore } from "../../../stores/useCasesStore";
import { handleTime, handleMemory } from '../selfResult/selfSuccess/index';
import { Badge } from "@ui-aurora/react";



export const ProblemCases = () => {
    const { problemId } = useParams();
    const { clearCaseId, CaseId } = useCaseMoreStore(state => ({ clearCaseId: state.clearCaseId, CaseId: state.CaseId }))
    const cases = useCasesStore(state => state.cases)
    const casesArr = cases.get(problemId!)
    const casesValue = casesArr?.find(item => item.id == CaseId)
    // console.log(casesValue);

    if (casesValue?.singleCases.length) {
        return (
            <>
                <span className={styles.icon} ><ArrowLeft onClick={() => clearCaseId()} /></span>
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
                                    <span className={styles.id} >
                                        {item.index + 1}
                                    </span>
                                    <div>
                                        <StatusTag status={item?.state} />
                                    </div>
                                    <div className={styles.font}>{`${handleTime(Number(item.time))} ms`}</div>
                                    <div className={styles.font}>{`${handleMemory(Number(item.memory))} mb`}</div>
                                    <div>
                                        <Badge
                                            className={styles.badge}
                                            content={item.point.toString()}
                                            size="small"
                                            type={item.point == 0 ? 'error' : 'info'}
                                            shadow="small"
                                        /></div>
                                </div>
                            );
                        })}
                    </>
                </div >
            </>
        )
    } else return (
        <>
            <ArrowLeft style={{ marginBottom: 16 }} size={30} onClick={() => clearCaseId()} />
            <div style={{ height: 'unset', marginTop: '40%' }}>
                <Empty />
            </div>
        </>
    )
}