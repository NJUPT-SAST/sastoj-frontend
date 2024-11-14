import { Card, CheckboxProps, RadioProps } from "@ui-aurora/react";
import styles from "./page.module.scss";
import useMarkdown from "../../../hooks/useMarkdown";
import { CodeEditorCardContent } from "../../../components/problems/codeEditorCardContent";
import { ReactNode, useState } from "react";
import { StatusCardContent } from "../../../components/problems/statusCardContent";
import { useSwrGetProblem } from "../../../swrHooks/problem";
import { useParams } from "react-router-dom";
import { useMonitorCaseId } from "../../../hooks/useMonitorCaseId";
import { ProblemContentResult } from "../../../components/problems/problemContent";
import { SingleQuestion } from "../../../components/problems/SingleQuestions";
import { InputQuestions } from "../../../components/problems/InputQuestions";
import { MultipleQuestions } from "../../../components/problems/MultipleQuestions";

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

  const singleChoiceTransform = (metadata: string) => {
    const options: RadioProps[] = [];
    for (const [key, value] of Object.entries(JSON.parse(metadata) as object)) {
      options.push({
        value: key,
        label: value as unknown as string,
      });
    }

    return options;
  };

  const multipleChoiceTransform = (metadata: string) => {
    const options: CheckboxProps[] = [];
    for (const [key, value] of Object.entries(JSON.parse(metadata) as object)) {
      options.push({
        value: key,
        label: value as unknown as string,
      });
    }

    return options;
  };

  if (data?.type === "Multiple-Choice") {
    return (
      <ShowQuestionCard>
        <MultipleQuestions
          title={data.content}
          score={data.score}
          options={multipleChoiceTransform(data.metadata.options)}
          id={data.id}
        ></MultipleQuestions>
      </ShowQuestionCard>
    );
  }

  if (data?.type === "Single-Choice") {
    return (
      <ShowQuestionCard>
        <SingleQuestion
          title={data.content}
          score={data.score}
          options={singleChoiceTransform(data.metadata.options)}
          id={data.id}
        ></SingleQuestion>
      </ShowQuestionCard>
    );
  }

  if (data?.type === "Short-Answer") {
    return (
      <ShowQuestionCard>
        <InputQuestions
          title={data.content}
          score={data.score}
          id={data.id}
        ></InputQuestions>
      </ShowQuestionCard>
    );
  }

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

const ShowQuestionCard = (props: { children: ReactNode }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexGrow: "1",
        padding: "1rem",
        boxSizing: "border-box",
      }}
    >
      <Card content={props.children} size="large"></Card>
    </div>
  );
};
export default ProblemContent;
