import { useSwrGetProblems } from "../../../../swrHooks/problems";
import { sortByKey } from "../../../../utils/aboutHandleData";
import { SheetSkelecton } from "../../../skelecton/problems/sheet";
import styles from "./index.module.scss";
import React from "react";
import { Problem } from "../../../../types/problem";

interface ProblemsListProps {
  handleSelect: (problemId: number) => void;
}

export const ProblemsList: React.FC<ProblemsListProps> = ({ handleSelect }) => {
  const contestId = localStorage.getItem("contestId");
  const { data } = useSwrGetProblems(contestId as unknown as number);
  const problems = sortByKey(data?.problems as object[], "index");
  if (!problems) return <SheetSkelecton />;

  return (
    <div className={styles["list-container"]}>
      {problems?.map((item: Problem) => {
        return (
          <>
            <div
              key={`${item.id}${item.title}`}
              className={styles["list-item"]}
              onClick={() => handleSelect(item.id)}
            >
              <div style={{ border: "1px solid #000", borderRadius: "50%", width: "1.8rem", height: "1.8rem", display: "flex", alignItems: "center", justifyContent: "center"}}>{item.index}</div>
              <span style={{ flexGrow: "1", paddingLeft: "20px" }}>
                {item.title}
              </span>
              <span style={{ whiteSpace: "nowrap" }}>Score: {item.score}</span>
            </div>
          </>
        );
      })}
    </div>
  );
};
