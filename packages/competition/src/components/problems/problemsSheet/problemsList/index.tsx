import { Checkbox } from "@ui-aurora/react";
import { useSwrGetProblems } from "../../../../swrHooks/problems";
import styles from "./index.module.scss";
import React from "react";

interface ProblemsListProps {
  handleSelect: (problemId: string) => void;
}

export const ProblemsList: React.FC<ProblemsListProps> = ({ handleSelect }) => {
  const { data } = useSwrGetProblems(1);

  return (
    <div className={styles["list-container"]}>
      {data?.problems.map((item) => {
        return (
          <div
            key={`${item.id}${item.title}`}
            className={styles["list-item"]}
            onClick={() => handleSelect(item.id)}
          >
            <Checkbox label={`${item.id}. ${item.title}`} fontsize={12} />
            <span>Point: {item.point}</span>
          </div>
        );
      })}
    </div>
  );
};
