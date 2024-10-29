import { ContentSkeleton } from "../../skelecton/problems/content";
import styles from "./idnex.module.scss";
import { Suspense, lazy } from "react";

const ProblemCases = lazy(() => import("../problemCases"));

export const ProblemContentResult = ({
  html,
  CaseId,
}: {
  html: string;
  CaseId: string | undefined;
}) => {
  if (html && CaseId)
    return (
      <Suspense fallback={<ContentSkeleton />}>
        <ProblemCases />
      </Suspense>
    );

  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      className={styles["markdown-content"]}
    />
  );
};
