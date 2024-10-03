import { ContentSkeleton } from "../../skelecton/problems/content";
import styles from "./idnex.module.scss";
import { ProblemCases } from "../problemCases";

export const ProblemContentResult = ({
  html,
  CaseId,
}: {
  html: string;
  CaseId: string | undefined;
}) => {
  if (!html) {
    return <ContentSkeleton />;
  }
  if (html && CaseId) return <ProblemCases />;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      className={styles["markdown-content"]}
    />
  );
};
