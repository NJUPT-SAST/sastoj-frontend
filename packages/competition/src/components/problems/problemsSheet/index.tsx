import { Sheet } from "@ui-aurora/react";
import React from "react";
import { ProblemsList } from "./problemsList";
import { useNavigate } from "react-router-dom";

interface ProblemsSheetProps {
  visible: boolean;
  onCancel?: () => void;
}

export const ProblemsSheet: React.FC<ProblemsSheetProps> = ({
  visible,
  onCancel,
}) => {
  const navigate = useNavigate();
  const handleSelect = (problemId: string) => {

    onCancel && onCancel();
    navigate(`/problems/${problemId}`);
  };
  return (
    <Sheet
      visible={visible}
      onCancel={onCancel}
      width={500}
      mainContent={<ProblemsList handleSelect={handleSelect} />}
      sheetFooter={null}
      sheetTitle="题目列表"
      placement="left"
    />
  );
};
