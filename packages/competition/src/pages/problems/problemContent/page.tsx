import { Card } from "@ui-aurora/react";
import styles from "./page.module.scss";
import useMarkdown from "../../../hooks/useMarkdown";
import { CodeEditorCardContent } from "../../../components/problems/codeEditorCardContent";
import { useState } from "react";
import { StatusCardContent } from "../../../components/problems/statusCardContent";
import { useSwrGetProblem } from "../../../swrHooks/problem";
import { useParams } from "react-router-dom";
import { useMonitorCaseId } from "../../../hooks/useMonitorCaseId";
import { ProblemContentResult } from "../../../components/problems/problemContent";
// import { SingleQuestion } from "../../../components/problems/SingleQuestions";

const ProblemContent = () => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const contestId = localStorage.getItem("contestId");
  const CaseId = useMonitorCaseId();

  const { problemId } = useParams();
  const handleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const { data } = useSwrGetProblem(
    Number(contestId) as unknown as number,
    problemId as unknown as number,
  );

  const html = useMarkdown(data?.content ?? "");
  return (
    <div className={styles["problem-content-container"]}>
      <Card
        className={`${styles["markdown-show-container"]} ${isFullScreen ? styles["full-screen"] : ""}`}
        content={<ProblemContentResult html={html} CaseId={CaseId} />}
      ></Card>
      <div className={styles["problem-show"]}>
        <Card
          className={styles.codeEditor}
          header={null}
          content={<CodeEditorCardContent setIsFullScreen={handleFullScreen} />}
          footer={null}
        ></Card>
        <Card
          header={null}
          footer={null}
          content={<StatusCardContent />}
          className={`${styles["code-status-information"]} ${isFullScreen ? styles["full-screen"] : ""}`}
        ></Card>
      </div>
    </div>
  );
};

export default ProblemContent;
